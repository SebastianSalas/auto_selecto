from users import models
from rest_framework.serializers import ModelSerializer
from django.contrib.auth import get_user_model
User = get_user_model()

class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {
            'password': {'write_only': True}
        }
    
    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user


class ClientSerializer(ModelSerializer):
    class Meta:
        model = models.Client
        fields = '__all__'