# Dockerfile for auto_selecto (backend)
FROM python:3.8-slim

# Select working directory
WORKDIR /code

# Copy requirements.txt to working directory
COPY requirements.txt .

# Install requirements
RUN pip install -r requirements.txt

# Copy all files to working directory
COPY . .

# Expose the container port
EXPOSE 8000
ENTRYPOINT [ "/bin/bash", "/code/entrypoint.sh" ]