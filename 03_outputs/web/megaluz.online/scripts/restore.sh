#!/usr/bin/env bash
# Restauración de la BD de Megaluz Online desde el dump de UpdraftPlus
# 1. descomprime db.gz → mysql 2. search-replace dominios 3. ajusta login/admin
set -euo pipefail

DB_GZ="${1:-db/backup_2023-02-20-0956_Megaluz_874da2170f78-db.gz}"

# Importar dump
docker exec -i megaluz-db mysql -uroot -pmegaluzroot megaluz < <(gzip -dc "$DB_GZ")

# Activar wp-cli y esperar a WP
docker compose exec -T wp bash -lc 'while ! wp core is-installed 2>/dev/null; do sleep 2; done' || true

# Search-replace del dominio productivo → local (con wp-cli)
docker compose exec -T wpcli wp search-replace 'https://megaluz.online' 'http://localhost:8089' --all-tables --report-changed-only
docker compose exec -T wpcli wp search-replace 'http://megaluz.online' 'http://localhost:8089' --all-tables --report-changed-only
docker compose exec -T wpcli wp search-replace '\/\/megaluz.online' '\/\/localhost:8089' --all-tables --report-changed-only

# Admin local para acceso (solo entorno local)
docker compose exec -T wpcli wp user create eduardo eduardo@megaluz.local --role=administrator --user_pass=megaluz2026 || true

# Info del login real (WPS Hide Login cambia la URL de wp-login)
docker compose exec -T wpcli wp option get whl_page || true

echo "Listo: http://localhost:8089 | phpMyAdmin: http://localhost:8090"
