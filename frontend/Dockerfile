# syntax=docker/dockerfile:1

#-------------------------------------------

# Build frontend assets

#-------------------------------------------

FROM node:18-slim AS build

LABEL org.opencontainers.image="coffeeshop frontend"
LABEL org.opencontainers.description="react + vite coffe shop project for frontend"
LABEL org.opencontainers.version="1.0.0"
LABEL org.opencontainers.author="Devops Team prasanth.rathinavel.11@gmail.com"
LABEL org.opencontainers.source="https://github.com/rprasanth11/coffeeshop-app"

WORKDIR /usr/src/app

# Copy Dependency file first 

COPY package.json package-lock.json* ./

RUN npm install

# Copy source code 

COPY . .

# Build Static files

RUN npm run build

#-------------------------------------------------

# Production Stage

#-------------------------------------------------

FROM nginx:alpine AS prod

# Set working dir for nginx

WORKDIR /usr/share/nginx/html

# Remove default nginx page

RUN rm -rf ./*

# Copy build file from previous stage

COPY --from=build /usr/src/app/dist .

# Expose port

EXPOSE 80

# Keep nginx in foreground

CMD ["nginx", "-g", "daemon off;"]
