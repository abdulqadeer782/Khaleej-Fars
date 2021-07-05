from django.db.models import fields
from rest_framework.serializers import ModelSerializer
from .models import Teacher


class TeacherSerializer(ModelSerializer):

    class Meta:
        model = Teacher
        fields = '__all__'