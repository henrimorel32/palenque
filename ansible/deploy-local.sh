# ne plus utiliser ce script, il est obsolète et ne correspond plus à la réalité du projet
# utiliser deploy dans ansible

# #!/bin/bash
# # Script de déploiement rapide depuis les fichiers locaux
# # Usage : ./deploy-local.sh

# set -e

# SERVER="henri@57.129.104.225"
# PORT="2222"
# REMOTE_DIR="/opt/docker/apps/palenque/source"

# echo "======================================"
# echo " Déploiement Palenque sur $SERVER"
# echo "======================================"

# # Vérifier qu'on est dans le bon dossier
# if [ ! -f "deploy.yml" ]; then
#     echo "Erreur : Lancez ce script depuis le dossier ansible/"
#     exit 1
# fi

# echo ""
# echo "[1/4] Synchronisation des fichiers source..."
# rsync -avz --delete \
#     --exclude 'node_modules' \
#     --exclude '.next' \
#     --exclude '.git' \
#     --exclude '*.log' \
#     --exclude '.env.local' \
#     --exclude '.env.development' \
#     -e "ssh -p $PORT" \
#     ../source/ $SERVER:$REMOTE_DIR/ 2>/dev/null || \
# rsync -avz --delete \
#     --exclude 'node_modules' \
#     --exclude '.next' \
#     --exclude '.git' \
#     --exclude '*.log' \
#     --exclude '.env.local' \
#     --exclude '.env.development' \
#     -e "ssh -p $PORT" \
#     ../ $SERVER:$REMOTE_DIR/

# echo ""
# echo "[2/4] Lancement du playbook de déploiement..."
# ansible-playbook -i inventory.yml deploy.yml

# echo ""
# echo "======================================"
# echo " Déploiement terminé !"
# echo "======================================"
# echo ""
# echo " URL : https://palenquerincondelmar.co"
# echo " Login : palenque / palenque"
# echo ""
# echo " Logs : ssh -p $PORT $SERVER 'cd /opt/docker/apps/palenque && docker-compose logs -f app'"
# echo "======================================"
