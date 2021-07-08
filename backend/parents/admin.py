from django.contrib import admin
from .models import Parent

# Register your models here.

class ParentAdmin(admin.ModelAdmin):

    list_display = ('fname','lname','email','password','dob','mobile','created_at','updated_at')


admin.site.register(Parent,ParentAdmin)
