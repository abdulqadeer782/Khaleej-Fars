from django.utils.timezone import datetime
from django.db import models
from parents.models import Parent
from django.contrib.humanize.templatetags import humanize



class Student(models.Model):

    fname = models.CharField(max_length=100)
    lname = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=150)
    dob = models.DateTimeField(default=datetime.now)
    parent = models.ForeignKey(Parent,on_delete=models.CASCADE)
    admission_date = models.DateTimeField(default=datetime.now)
    mobile = models.BigIntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(default=datetime.now)

    def __str__(self):
        return self.fname + self.lname

    def get_date(self):
        return humanize.naturaltime(self.date)

    class Meta:
        db_table = 'student'
        managed = True
        verbose_name = 'Student'
        verbose_name_plural = 'Students'