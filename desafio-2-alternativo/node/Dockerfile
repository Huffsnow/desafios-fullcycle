# image mais leve para produção
FROM node:18-slim

# executando como sudo/admin
RUN apt-get update && apt-get install wget -y

# usando o usuario node da imagem node para ser mais seguro
USER node

WORKDIR /usr/src/app
# Não precisa copiar porque já é feito o mapeamento de volumes
# COPY . .

#Esta no docker-compose agora
# RUN npm install

EXPOSE 3000