from django.shortcuts import render
from rest_framework import viewsets
from ..users.serializer import ClientSerializer

# Create your views here.
class ClientView(viewsets.ModelViewSet):
    ClientSerializer 