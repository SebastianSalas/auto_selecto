# Uso de la imagen oficial de node (alpine) para crear la imagen
FROM node:14-alpine as builder

# Directorio de trabajo
WORKDIR /app

# Copiar el package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Compila la aplicación Vite
RUN npm run build

# Usa una imagen liviana para ejecutar la aplicación
FROM nginx:alpine

# Copia los archivos compilados (dist) de la aplicación al directorio adecuado en nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Inicia nginx