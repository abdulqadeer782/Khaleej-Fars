from django.utils.timezone import datetime
from django.db import models
from parents.models import Parent


class Student(models.Model):

    fname = models.CharField(max_length=100)
    lname = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=150)
    dob = models.DateTimeField(default=datetime.now)
    parent = models.ForeignKey(Parent,on_delete=models.CASCADE)
    mobile = models.BigIntegerField()
    created_at = models.DateTimeField(default=datetime.now)
    updated_at = models.DateTimeField(default=datetime.now)

    def __str__(self):
        return self.fname + self.lname