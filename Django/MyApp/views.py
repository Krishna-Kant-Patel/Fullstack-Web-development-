from django.views.generic import TemplateView
from .models import Post

class HomePage(TemplateView):
    template_name = "home.html"


    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['Data'] = Post.objects.all()
        return context
