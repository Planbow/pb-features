FROM node:lts-alpine as build
WORKDIR /app

COPY package.json .
RUN npm install --production
COPY . .
RUN npm run build

FROM nginx:alpine
#COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/.next /usr/share/nginx/html