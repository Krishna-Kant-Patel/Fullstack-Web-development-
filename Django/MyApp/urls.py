from django.urls import path
from .views import HomePage, PostDetailView, PostForms
app_name = 'MyApp'
urlpatterns = [
    path('', HomePage.as_view(), name="index"),
    path("detail/<int:pk>/", PostDetailView.as_view(), name="detail"),
    path("Post/", PostForms.as_view(), name="add")
]
