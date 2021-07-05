from django.db import models
from django.utils import timezone
# Create your models here.

class Classroom(models.Model):

    grade = models.CharField(max_length=100)
    created_at = models.TimeField(auto_now_add=timezone.now)
    updated_at = models.TimeField(auto_now_add=timezone.now)

    def __str__(self):
        return self.grade

    class Meta:
        db_table = 'classes'


class ClassSchedule(models.Model):

    class_id = models.ForeignKey(Classroom,on_delete=models.CASCADE)
    class_timing = models.DateTimeField()

    def __str__(self):
        return self.class_timing
    class Meta:
        db_table = 'classes_schedule'
