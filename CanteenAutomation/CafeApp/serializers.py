from rest_framework import serializers
from .models import User,items,orders,Profile,canteen
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

class AccountDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Profile
        fields = '__all__'

class CanteenSerializer(serializers.ModelSerializer):
    class Meta:
        model=canteen
        fields = '__all__'