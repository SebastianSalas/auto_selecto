from rest_framework.response import Response
from rest_framework.decorators import api_view
from users.models import StaffMember
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
    if user.has_related_object():
      token['staff_member_id'] = user.staffmember.id
      token['company_position_id'] = user.staffmember.company_position.id
      token['active'] = user.staffmember.active
      token['city_id'] = user.city.id
    else:
      token['staff_member_id'] = None
      token['company_position_id'] = None
      token['active'] = None
      token['city_id'] = None

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

class StaffMemberListView(generics.ListAPIView):
  queryset = StaffMember.objects.all()
  serializer_class = StaffMemberSerializer