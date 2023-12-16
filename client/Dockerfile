# Use node:alpine as base image
FROM node:alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to working directory
COPY package*.json .

# Install dependencies
RUN npm i

# Copy all files to working directory
COPY . .

# Build the app
RUN npm run build




# Use nginx:alpine as base image
FROM nginx:alpine

# Copy nginx configuration file to nginx directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the container port
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]