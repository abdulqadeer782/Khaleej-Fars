from django.db import models
from django.utils.timezone import datetime


# Create your models here.

class Teacher(models.Model):

    fname = models.CharField(max_length=100)
    lname = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=150)
    dob = models.DateField()
    mobile = models.BigIntegerField()
    joining = models.DateField(default=datetime.now)
    created_at = models.DateTimeField(default=datetime.now)
    updated_at = models.DateTimeField(default=datetime.now)



    def __str__(self):
        return '{} {} {}'.format(self.fname,self.lname,self.email)


    class Meta:
        db_table = 'teacher'