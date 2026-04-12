# Playbooks Ansible - Déploiement Palenque

Playbooks pour déployer l'application Palenque sur le serveur `henri@57.129.104.225:2222`.

## Architecture

- **Domaine** : `palenquerincondelmar.co`
- **Reverse Proxy** : Traefik (déjà installé sur le serveur)
- **Réseau** : `edu_proxy` (externe, fourni par Traefik)
- **Auth** : Basic Auth via Nginx (.htaccess)
- **Login/Mot de passe** : `palenque` / `palenque`

## Structure

```
ansible/
├── install.yml              # Installation initiale
├── deploy.yml               # Déploiement des mises à jour
├── inventory.yml            # Configuration du serveur
├── group_vars/
│   └── all/
│       └── vault.yml        # Variables secrètes (à créer)
└── templates/
    ├── docker-compose.yml.j2
    ├── nginx-no-auth.conf.j2      # Config sans auth (certificats)
    ├── nginx-with-auth.conf.j2    # Config avec auth (.htaccess)
    └── env.production.j2
```

## Prérequis

1. **Ansible installé** sur votre machine locale :
   ```bash
   pip install ansible
   ```

2. **Accès SSH** configuré vers le serveur :
   ```bash
   ssh-copy-id -p 2222 henri@57.129.104.225
   ```

3. **Sudo sans mot de passe** configuré sur le serveur (pour créer `/opt/docker/apps/`) :
   ```bash
   # Une fois connecté au serveur
   ssh -p 2222 henri@57.129.104.225
   sudo visudo
   # Ajoutez cette ligne à la fin du fichier :
   henri ALL=(ALL) NOPASSWD:ALL
   ```

4. **Variables secrètes** configurées :
   ```bash
   cd ansible/group_vars/all
   cp vault.yml.example vault.yml
   # Éditez vault.yml avec vos vraies valeurs
   ansible-vault encrypt vault.yml
   ```

## Utilisation

### 1. Installation initiale

```bash
cd ansible
ansible-playbook -i inventory.yml install.yml
```

**Ce playbook va :**
- Vérifier que le réseau `edu_proxy` existe (s'arrête sinon)
- Créer `/opt/docker/apps/palenque`
- Configurer `.htpasswd` (login: `palenque`, password: `palenque`)
- Déployer la stack Docker (Postgres, Redis, App, Nginx)
- **Générer les certificats SSL** (sans auth pendant 30s)
- **Activer l'authentification basique** après obtention des certificats

### 2. Déploiement des mises à jour

Pour mettre à jour l'application avec vos modifications :

```bash
# Méthode 1 : Rsync (recommandé pour le développement)
# Copiez d'abord vos fichiers modifiés sur le serveur :
rsync -avz --exclude 'node_modules' --exclude '.next' --exclude '.git' \
  -e "ssh -p 2222" \
  ./ henri@57.129.104.225:/opt/docker/apps/palenque/source/

# Puis lancez le déploiement :
ansible-playbook -i inventory.yml deploy.yml

# Méthode 2 : Git (si configuré dans vault.yml)
# Modifiez vault.yml : vault_use_git: true + vault_git_repo: "..."
ansible-playbook -i inventory.yml deploy.yml --ask-vault-pass
```

**Ce playbook va :**
- Sauvegarder la base de données
- Rebuild l'image Docker
- Redémarrer les containers
- Exécuter `prisma migrate deploy` si activé

## Commandes utiles

```bash
# Se connecter au serveur
ssh -p 2222 henri@57.129.104.225

# Sur le serveur :
cd /opt/docker/apps/palenque

# Voir les logs
docker-compose logs -f app
docker-compose logs -f nginx
docker-compose logs -f postgres

# État des services
docker-compose ps

# Redémarrer un service
docker-compose restart app

# Accès à la base de données
docker-compose exec postgres psql -U palenque_user -d palenque_db

# Shell dans l'app
docker-compose exec app sh
```

## Désactiver l'authentification (temporairement)

Si vous devez désactiver le .htaccess (démonstration, etc.) :

```bash
ssh -p 2222 henri@57.129.104.225

cd /opt/docker/apps/palenque
# Remplacer par la config sans auth
sudo cp nginx/nginx-no-auth.conf nginx/default.conf
docker-compose exec nginx nginx -s reload
```

Pour réactiver :

```bash
sudo cp nginx/nginx-with-auth.conf nginx/default.conf
docker-compose exec nginx nginx -s reload
```

## Troubleshooting

### Le réseau `edu_proxy` n'existe pas
```bash
# Vérifier sur le serveur :
docker network ls

# Si Traefik est installé ailleurs, vérifiez le nom du réseau
# et modifiez `traefik_network` dans les playbooks
```

### Certificats SSL non générés
```bash
# Voir les logs Traefik :
docker logs traefik

# Vérifier que le domaine pointe bien vers le serveur
dig palenquerincondelmar.co
```

### Erreur de connexion à la base de données
```bash
# Vérifier que Postgres est démarré
docker-compose ps postgres
docker-compose logs postgres
```

## Sécurité

- Le fichier `vault.yml` contient les mots de passe et doit être **chiffré**
- Les backups de BDD sont dans `/opt/docker/apps/palenque/backups/`
- Le `.htpasswd` est généré automatiquement avec `palenque`/`palenque`
- Pensez à changer le mot de passe en production !

