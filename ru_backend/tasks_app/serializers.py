from rest_framework import serializers
from tasks_app.models import Task, TasksCategory

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = TasksCategory
        fields = '__all__'
    

class TaskSerializer(serializers.ModelSerializer):
    category_info = CategorySerializer()
    class Meta:
        model = Task
        fields = '__all__'