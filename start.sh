#!/bin/bash

# Copia o .env.example para .env, se ainda não existir
if [ ! -f ./.env ]; then
  cp ./.env.example ./.env
  echo "Arquivo .env criado com base no .env.example."
else
  echo "Arquivo .env já existe."
fi

# Inicia o docker-compose
docker-compose up --build
