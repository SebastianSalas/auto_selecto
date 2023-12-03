# Uso de la imagen oficial de Python (alpine version)
FROM python:3.9.18-alpine3.18

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo requirements.txt al contenedor en /app
COPY requirements.txt .

# Instala las dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Copia el contenido de la carpeta actual al contenedor en /app
COPY . .
COPY manage.py .

# Ejecuta las migraciones y crea el super usuario
RUN python manage.py migrate
RUN python manage.py createsuperuser --noinput

# Expone el puerto 8000
EXPOSE 8000

# Ejecuta el comando "python manage.py runserver
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]