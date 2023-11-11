from rest_framework import serializers
from .models import *
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
    order_cust_name = serializers.CharField(source='order_cust.cust.name')
    order_canteen_name = serializers.CharField(source='order_canteen.owner.name')
    items = MenuItemSerializer(many=True)
    class Meta:
        model = orders
        fields = ('id','order_cust_name','order_canteen_name','total_amount','items','status')

class AccountDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Profile
        fields = '__all__'

class CanteenSerializer(serializers.ModelSerializer):
    canteen_name = serializers.CharField(source='owner.name', read_only=True)
    class Meta:
        model=canteen
        fields = ('canteen_name','canteen_id')

class feedbackserializer(serializers.ModelSerializer):
    #order_id=OrderSerializer()
    class Meta:
        model=feedback
        fields = ('order_id','review','rating')

class OrderDetailSerializer(serializers.ModelSerializer):
    items = MenuItemSerializer(many=True)
    class Meta:
        model = orders
        fields = ('id','total_amount','items','status')