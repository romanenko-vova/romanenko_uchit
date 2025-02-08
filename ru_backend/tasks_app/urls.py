from django.urls import path
from tasks_app.views import main, TasksGetView, CategoryGetView

app_name = 'tasks_app'

urlpatterns = [
    path('hello/', main),
    path('get_tasks/', TasksGetView.as_view()),
    path('get_categories/', CategoryGetView.as_view()),
    
]
