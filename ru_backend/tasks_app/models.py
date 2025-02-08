from django.db import models


class TasksCategory(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return f'{self.id}. {self.name}'
    

class Task(models.Model):
    title = models.CharField(max_length=200)
    text = models.TextField()
    category = models.ForeignKey(TasksCategory, on_delete=models.CASCADE)
    
    def __str__(self):
        return f'{self.id}. {self.title}'
    @property
    def category_info(self):
        return TasksCategory.objects.get(id=self.category.id)