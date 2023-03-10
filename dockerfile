

# Install PHP
FROM php:8.1-alpine AS php

COPY . /app
WORKDIR /app

## install composer with php
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

## install composer dependencies
RUN composer install --no-dev --optimize-autoloader

## Copy folder from /public/images to /public/build/images
RUN mkdir -p public/build/images
RUN cp -r public/images public/build/

# Change Storage Permission
RUN chmod -R 777 /app/storage

# Change Permission
RUN chown -R www-data:www-data /app