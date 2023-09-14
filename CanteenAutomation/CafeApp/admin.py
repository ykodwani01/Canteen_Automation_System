from django.contrib import admin
from .models import *

# class CanteenAdmin(admin.ModelAdmin):
#     list_display=('canteen_id','owner','name','contact_number')

admin.site.register(canteen)
admin.site.register(customer)
admin.site.register(items)
admin.site.register(orders)
admin.site.register(Profile)
# admin.site.register(User)
# Register your models here.
