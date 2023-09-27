from rest_framework import serializers
from .models import User
from django.conf import settings

# serialize or deserialize user datasets


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

    def create(self, data):
        return User.objects.create_user(**data)