from .models import Classroom,ClassSchedule
from django.contrib import admin

# Register your models here.

class ClassroomAdmin(admin.ModelAdmin):
    list_display = ('id','grade','created_at','updated_at')


admin.site.register(Classroom, ClassroomAdmin)

class ClassScheduleAdmin(admin.ModelAdmin):
    list_display = ('id','class_id','class_timing')
    
admin.site.register(ClassSchedule, ClassScheduleAdmin)
    