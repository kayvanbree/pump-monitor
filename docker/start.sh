#!/bin/sh
ngssc insert /usr/share/nginx/html
sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf
nginx -g 'daemon off;'
