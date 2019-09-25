FROM nginx
LABEL Name=hkwebsite Version=1.0
COPY *.html /usr/share/nginx/html/
COPY images /usr/share/nginx/html/images/
COPY libs /usr/share/nginx/html/libs/
COPY default.conf /etc/nginx/conf.d/default.conf
COPY cert /etc/nginx/cert/