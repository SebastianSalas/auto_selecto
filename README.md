<p align='center'>
  <img width='200' heigth='225' src='https://user-images.githubusercontent.com/62605744/171186764-43f7aae0-81a9-4b6e-b4ce-af963564eafb.png'>
</p>

# Proyecto desarrollo de software I
- Proyecto final desarrolo de software I
- Semestre 2023-I
- Profesor: Carlos Mauricio Gaona Cuevas

## Autores
- Marcelo Alejandro García Millán - 201941427
- Janiert Sebastián Salas Castillo - 201941265
- Diego Fernando Victoria López - 202125877


## Como ejecutar el código con ambiente virtual:

<br>
Instala el paquete "virtualenv":


pip install virtualenv 


<br>
Para crear el ambiente virtual llamado ".venv":


python -m venv .venv


<br>
Para ejecutar el ambiente virtual (sólo en Windows):


.\venv\Scripts\activate


<strong> Mac: </strong> 


source .venv/bin/activate

<br>
Realizar las instalaciones de las dependencias (procure haber ejecutado el ambiente virtual):


pip install -r requirements.txt

<br>
Para realizar las migraciones a la base de datos de postgres (NOTA: Asegurarse de las respectivas credenciales de acceso a su BD local):
<br>


Windows:


python manage.py makemigrations


python manage.py migrate


<strong> Mac: </strong>


python3 manage.py makemigrations


python3 manage.py migrate

<br>
Para ejecutar el servidor Django:


python manage.py runserver


<br>
Para cerrar el ambiente virtual:


deactivate
