from django.shortcuts import render, HttpResponse
from rest_framework.generics import ListCreateAPIView
from tasks_app.models import Task, TasksCategory
from tasks_app.serializers import TaskSerializer, CategorySerializer

# Create your views here.

def main(request):
    return HttpResponse('Hello')

class TasksGetView(ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    
class CategoryGetView(ListCreateAPIView):
    queryset = TasksCategory.objects.all()
    serializer_class = CategorySerializer