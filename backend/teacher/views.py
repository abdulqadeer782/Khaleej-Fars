from .models import Teacher
from .serializer import TeacherSerializer
from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet

# Create your views here.
class TeacherView(ModelViewSet):

    serializer_class = TeacherSerializer
    queryset = Teacher.objects.all()