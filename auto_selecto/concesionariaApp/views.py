from django.shortcuts import render
from django.db.models import Q
from rest_framework import generics
from .models import City, CompanyPosition, Office, Vehicle
from .serializers import CitySerializer, CompanyPositionSerializer, OfficeSerializer, VehicleSerializer

class CityListCreateView(generics.ListCreateAPIView):
  queryset = City.objects.all()
  serializer_class = CitySerializer

class CompanyPositionListCreateView(generics.ListCreateAPIView):
  queryset = CompanyPosition.objects.all()
  serializer_class = CompanyPositionSerializer

class OfficeListCreateView(generics.ListCreateAPIView):
  queryset = Office.objects.all()
  serializer_class = OfficeSerializer

class VehicleCreateView(generics.CreateAPIView):
  serializer_class = VehicleSerializer


class VehicleListCreateView(generics.ListCreateAPIView):
  queryset = Vehicle.objects.all()
  serializer_class = VehicleSerializer

class VehicleDetailView(generics.RetrieveUpdateAPIView):
  serializer_class = VehicleSerializer

  def get_queryset(self):
    pk = self.kwargs.get('pk')
    return Vehicle.objects.filter(pk=pk)
  
class VehicleSearchView(generics.ListAPIView):
    serializer_class = VehicleSerializer

    def get_queryset(self):
        search_query = self.request.query_params.get('search', '')
        search_terms = search_query.split()  # Divide la consulta en términos individuales

        queryset = Vehicle.objects.all()

        for term in search_terms:
            queryset = queryset.filter(Q(name__icontains=term) | Q(brand__icontains=term))

        return queryset