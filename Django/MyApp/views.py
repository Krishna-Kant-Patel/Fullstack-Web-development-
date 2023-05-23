from django.views.generic import TemplateView, DetailView, FormView
from .models import Post
from .forms import PostForm

class HomePage(TemplateView):
    template_name = "home.html"


    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['Data'] = Post.objects.all().order_by('-id')
        return context

class PostDetailView(DetailView):
    template_name = 'detail.html'
    model = Post

class PostForms(FormView):
    template_name = 'new_post.html'
    form_class = PostForm
    success_url = '/'

    def form_valid(self, form):
        new_object = Post.objects.create(
            text = form.cleaned_data['text'],
            image = form.cleaned_data['image']
        )
        return super().form_valid(form)
