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
    order_cust_name = serializers.CharField(source='order_cust.cust.name', read_only=True)
    order_canteen_name = serializers.CharField(source='order_canteen.owner.name', read_only=True)
    items = MenuItemSerializer(many=True,read_only=True)
    class Meta:
        model = orders
        fields = ('order_cust_name','order_canteen_name','total_amount','items','status')

class AccountDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Profile
        fields = '__all__'

class CanteenSerializer(serializers.ModelSerializer):
    canteen_name = serializers.CharField(source='owner.name', read_only=True)
    class Meta:
        model=canteen
        fields = ('canteen_name','canteen_id')