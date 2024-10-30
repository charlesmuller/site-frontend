# Usar uma imagem base com Node.js
FROM node:18-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia o package.json e package-lock.json para instalar as dependências
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install --legacy-peer-deps

# Copia todos os arquivos para o contêiner
COPY . .

# Expõe a porta utilizada pelo Vite (geralmente 5173)
EXPOSE 5173

# Comando para iniciar o servidor de desenvolvimento com --host para expor a rede
CMD ["npm", "run", "dev", "--", "--host"]
