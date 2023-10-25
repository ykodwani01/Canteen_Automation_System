from rest_framework import serializers
from .models import User,items,orders
from django.conf import settings

# serialize or deserialize user datasets


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

    def create(self, data):
        return User.objects.create_user(**data)

class MenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = items
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = orders
        fields = '__all__'
