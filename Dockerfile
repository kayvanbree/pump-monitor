FROM node:alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
COPY patch.js ./
RUN npm install
COPY . .
RUN npm run build:prod

FROM nginx:alpine
ADD https://github.com/kyubisation/angular-server-side-configuration/releases/download/v11.0.2/ngssc_64bit /usr/sbin/ngssc
RUN chmod +x /usr/sbin/ngssc
COPY --from=builder /usr/src/app/dist/pump-monitor /usr/share/nginx/html
COPY docker/start.sh start.sh
RUN chmod +x ./start.sh
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
CMD ["./start.sh"]
