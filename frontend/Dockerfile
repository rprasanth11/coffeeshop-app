# syntax=docker/dockerfile:1

FROM node:18-slim AS build

LABEL org.opencontainers.image="coffeeshop frontend"
LABEL org.opencontainers.description="react + vite coffe shop project for frontend"
LABEL org.opencontainers.version="1.0.0"
LABEl org.opencontainers.author="Devops Team prasanth.rathinavel.11@gmail.com"
LABEL org.opencontainers.source="https://github.com/rprasanth11/coffeeshop-app"

WORKDIR /usr/src/app

# Install and build Dependency

COPY package.json packa-lock.jason* ./

RUN npm Install

COPY . .

RUN npm run build

# Production Stage

FROM nginx:alpine AS prod
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Expose port

EXPOSE 80

CMD ["nginx", "-g", "daemon off"]
