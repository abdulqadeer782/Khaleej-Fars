from django.contrib import admin
from .models import Teacher

# Register your models here.

class TeacherAdmin(admin.ModelAdmin):

    list_display = ('fname','lname','email','password','dob','mobile','created_at','updated_at')

admin.site.register(Teacher,TeacherAdmin)

