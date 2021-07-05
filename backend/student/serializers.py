from django.db.models import fields
from rest_framework import serializers
from .models import Student

class StudentSerializer(serializers.ModelSerializer):

    parent = serializers.ReadOnlyField(source='parent.fname')

    class Meta:
        model = Student
        # fields = ('id','parent_id','fname','lname','email','password','dob','mobile','created_at')
        fields = "__all__"