# Desenvolvimento otimizado
FROM node:18-alpine

WORKDIR /app

# Instalar dependências primeiro (cache layer)
COPY package*.json ./
RUN npm ci --legacy-peer-deps && npm cache clean --force

# Copiar código fonte
COPY . .

EXPOSE 5173

# Comando otimizado
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
