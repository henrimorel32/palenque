#!/bin/bash

# Script de déploiement vers VPS de production
# Usage: ./deploy.sh [staging|production]

set -e

ENV=${1:-production}
VPS_HOST=${VPS_HOST:-"51.178.136.181"}
VPS_USER=${VPS_USER:-"henri"}
PROJECT_NAME="hotel-palenque"
DEPLOY_DIR="/opt/docker/apps/${PROJECT_NAME}"
BACKUP_DIR="/opt/backups/${PROJECT_NAME}"

# Couleurs pour les logs
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Vérification des prérequis
check_prerequisites() {
    log_info "Vérification des prérequis..."
    
    if ! command -v ssh &> /dev/null; then
        log_error "SSH non installé"
        exit 1
    fi
    
    if ! command -v rsync &> /dev/null; then
        log_error "rsync non installé"
        exit 1
    fi
    
    if [ ! -f ".env.production" ]; then
        log_error "Fichier .env.production manquant"
        exit 1
    fi
}

# Tests locaux avant déploiement
run_local_tests() {
    log_info "Exécution des tests locaux..."
    
    # Linting
    npm run lint || {
        log_error "Erreurs de linting détectées"
        exit 1
    }
    
    # Build local pour vérifier
    log_info "Test de build local..."
    npm run build || {
        log_error "Échec du build local"
        exit 1
    }
    
    log_info "Tests locaux OK"
}

# Préparation du bundle de déploiement
prepare_bundle() {
    log_info "Préparation du bundle..."
    
    DEPLOY_TMP=$(mktemp -d)
    
    rsync -avz -e 'ssh -i ~/.ssh/id_ed25519_vps_web_page -p 2222' \
              --exclude='node_modules' \
              --exclude='.git' \
              --exclude='.next' \
              --exclude='*.log' \
              --exclude='.env.local' \
              --exclude='docker/dev' \
                ${bundle_dir}/ ${VPS_USER}@${VPS_HOST}:${DEPLOY_DIR}/
              ./ ${DEPLOY_TMP}/ > /dev/null 2>&1
    
    echo "${DEPLOY_TMP}"
}

# Déploiement sur le VPS
deploy_to_vps() {
    local bundle_dir=$1
    
    log_info "Déploiement vers ${VPS_HOST}..."
    
    # Création du répertoire de backup sur le VPS
    ssh -i ~/.ssh/id_ed25519_vps_web_page -p 2222 ${VPS_USER}@${VPS_HOST} "mkdir -p ${BACKUP_DIR} ${DEPLOY_DIR}"
    
    # Backup de la version actuelle si elle existe
    log_info "Backup de la version actuelle..."
    ssh -i ~/.ssh/id_ed25519_vps_web_page -p 2222 ${VPS_USER}@${VPS_HOST} "
        if [ -d ${DEPLOY_DIR}/.git ]; then
            cd ${DEPLOY_DIR} && \
            docker-compose -f docker/prod/docker-compose.yml down && \
            tar -czf ${BACKUP_DIR}/backup_$(date +%Y%m%d_%H%M%S).tar.gz . --exclude='node_modules' --exclude='.next' 2>/dev/null || true
        fi
    "
    
    # Rsync du nouveau code
    log_info "Transfert des fichiers..."
    rsync -avz --delete \
        --exclude='node_modules' \
        --exclude='.next' \
        -e "ssh -i ~/.ssh/id_ed25519_vps_web_page -p 2222" \
        ${bundle_dir}/ ${VPS_USER}@${VPS_HOST}:${DEPLOY_DIR}/

    # AJOUTE CECI : Copier .env.production
    rsync -avz .env.production ${VPS_USER}@${VPS_HOST}:${DEPLOY_DIR}/.env.production
    
    # Déploiement sur le VPS
    log_info "Build et démarrage des conteneurs..."
    ssh -i ~/.ssh/id_ed25519_vps_web_page -p 2222 ${VPS_USER}@${VPS_HOST} "
        cd ${DEPLOY_DIR} && \
        docker-compose -f docker/prod/docker-compose.yml down --remove-orphans && \
        docker-compose -f docker/prod/docker-compose.yml build --no-cache && \
        docker-compose -f docker/prod/docker-compose.yml up -d && \
        docker system prune -f
    "
    
    # Vérification de santé
    log_info "Vérification de santé..."
    sleep 10
    
    HEALTH_STATUS=$(ssh ${VPS_USER}@${VPS_HOST} "curl -s -o /dev/null -w '%{http_code}' http://localhost:3000/api/health || echo '000'")
    
    if [ "$HEALTH_STATUS" == "200" ]; then
        log_info "✅ Déploiement réussi ! Application accessible sur https://votre-hotel.com"
    else
        log_error "❌ Problème de santé détecté (HTTP ${HEALTH_STATUS})"
        log_warn "Rollback manuel disponible dans ${BACKUP_DIR}"
        exit 1
    fi
    
    # Nettoyage local
    rm -rf ${bundle_dir}
}

# Rollback en cas d'échec
rollback() {
    log_warn "Rollback demandé..."
    ssh -i ~/.ssh/id_ed25519_vps_web_page -p 2222 ${VPS_USER}@${VPS_HOST} "
        cd ${DEPLOY_DIR} && \
        docker-compose -f docker/prod/docker-compose.yml down && \
        # Restauration du dernier backup
        LATEST_BACKUP=\$(ls -t ${BACKUP_DIR}/*.tar.gz | head -1) && \
        tar -xzf \${LATEST_BACKUP} -C ${DEPLOY_DIR} && \
        docker-compose -f docker/prod/docker-compose.yml up -d
    "
}

# Main
main() {
    log_info "🚀 Démarrage du déploiement ${ENV}"
    
    check_prerequisites
    run_local_tests
    
    prepare_bundle > /tmp/bundle.log 2>&1
    BUNDLE_DIR=$(tail -1 /tmp/bundle.log)

    deploy_to_vps ${BUNDLE_DIR}
    
    log_info "🎉 Déploiement terminé avec succès !"
}

# Gestion des erreurs
trap 'log_error "Déploiement interrompu"; exit 1' INT TERM

# Exécution
main