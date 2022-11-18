# build environment
# - Building ------------------------------------------------------------------------------

#
FROM node:19.1.0-alpine3.15 as builder
#
#ENV NODE_ENV=development
#
COPY package.json .
COPY package-lock.json .
#
RUN npm clean-install
#
COPY . .
#
RUN npm run build

# - Production ----------------------------------------------------------------------------

# production environment
FROM nginx:1.23.2 as production
#
COPY --from=builder /build /usr/share/nginx/html
# override docker-entrypoint.sh 
COPY /docker/docker-entrypoint.sh /docker-entrypoint.sh
#
EXPOSE 80
#
CMD ["nginx", "-g", "daemon off;"]