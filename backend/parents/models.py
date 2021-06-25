from django.db import models
from django.utils.timezone import datetime

# Create your models here.
class Parent(models.Model):

    fname = models.CharField(max_length=100)
    lname = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=150)
    dob = models.DateField()
    mobile = models.BigIntegerField()
    created_at = models.DateTimeField(default=datetime.now)
    updated_at = models.DateTimeField(default=datetime.now)

    def __str__(self):
        return self.fname + self.lname

    class Meta:
        db_table = 'parent'
        managed = True