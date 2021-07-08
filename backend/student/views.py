from .models import Student
from .serializers import StudentSerializer
from django.http import HttpResponse
from rest_framework.viewsets import ModelViewSet


class StudentView(ModelViewSet):
    
    serializer_class = StudentSerializer
    queryset = Student.objects.all()

  