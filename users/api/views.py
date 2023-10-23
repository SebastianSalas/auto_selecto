from rest_framework.response import Response
from rest_framework.decorators import api_view
from users.models import StaffMember, Client
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
    print("clientoject")
    print(user.has_client_object())
    if user.has_client_object():
      token['client_id'] = user.client.id
    if user.has_staff_member_object():
      token['staff_member_id'] = user.staffmember.id
      token['company_position_id'] = user.staffmember.company_position.id
      token['active'] = user.staffmember.active
    else:
      token['staff_member_id'] = None
      token['company_position_id'] = None
      token['active'] = None
      
    if user.has_city_object():
      token['city_id'] = user.city.id
    else:
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

class StaffMemberDetailView(generics.RetrieveUpdateAPIView):
    serializer_class = StaffMemberSerializer

    def get_queryset(self):
        pk = self.kwargs.get('pk')
        return StaffMember.objects.filter(pk=pk)
    
class ClientDetailView(generics.RetrieveUpdateAPIView):
    serializer_class = ClientSerializer

    def get_queryset(self):
        pk = self.kwargs.get('pk')
        return Client.objects.filter(pk=pk)
