FROM nginx:1.15.0-alpine

RUN rm /etc/nginx/conf.d/default.conf
# Nao precisa mais pois fiz mapeamento de volume no docker-compose
# COPY nginx.conf /etc/nginx/conf.d

RUN mkdir /var/www/html -p && touch /var/www/html/index.php