# Install PHP
FROM php:8.1-alpine AS php

# copy only composer.json and composer.lock
COPY composer.* /app/backend/

# set working directory
WORKDIR /app/backend

# install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# install dependencies
RUN composer install --no-scripts --no-autoloader

# copy the rest of the files
COPY . /app/backend/

# run composer dump-autoload
RUN composer dump-autoload --optimize

# User and group www-data
RUN addgroup -g 1000 www && adduser -u 1000 -G www -s /bin/sh -D www

# Change Storage Permission
RUN chmod -R 777 /app/backend/storage

# Change Permission
RUN chown -R www:www /app/backend

FROM node:16-alpine AS node

# Install Dependencies
RUN npm install

# Build
RUN npm run build

# Copy the build files
COPY --from=node /app/backend/public /app/backend/public

