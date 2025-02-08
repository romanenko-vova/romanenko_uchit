from django.contrib import admin

from tasks_app.models import Task, TasksCategory

admin.site.register(Task)
admin.site.register(TasksCategory)