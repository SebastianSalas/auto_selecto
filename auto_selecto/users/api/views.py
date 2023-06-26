from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import UserSerializer, ClientSerializer, StaffMemberSerializer

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
  @classmethod
  def get_token(cls, user):
    token = super().get_token(user)

    # Add custom claims
    token['name'] = user.name
    token['last_name'] = user.last_name
    token['email'] = user.email
    token['cedula'] = user.cedula
    # ...

    return token
    
class MyTokenObtainPairView(TokenObtainPairView):
  serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def getRoutes(request): 
  routes = [
      'api/token',
      '/api/token/refresh',
  ]

  return Response(routes)

class UserCreateView(generics.CreateAPIView):
  serializer_class = UserSerializer

class ClientCreateView(generics.CreateAPIView):
  serializer_class = ClientSerializer

class StaffMemberCreateView(generics.CreateAPIView):
  serializer_class = StaffMemberSerializer
