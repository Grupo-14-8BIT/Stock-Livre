# Usar uma imagem base do Node.js mais recente para construir o projeto
FROM node:16 AS build

# Definir o diretório de trabalho no contêiner
WORKDIR /app

# Copiar o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o restante do código do projeto
COPY . .

# Compilar o projeto Angular
RUN npm run build --prod

# Usar uma imagem base do Nginx para servir a aplicação
FROM nginx:alpine

# Remover a configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copiar a configuração personalizada do Nginx
COPY nginx.conf /etc/nginx/conf.d/

# Copiar os arquivos compilados do build anterior para o diretório padrão do Nginx
COPY --from=build /app/dist/stock-livre /usr/share/nginx/html

# Expor a porta 80 para o tráfego HTTP
EXPOSE 80
EXPOSE 4200

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
