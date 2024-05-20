from django.urls import path
from . import views
from .views import JournalEntryListCreate
from .views import ArticleListCreateView

urlpatterns = [
    path('api/mood-entries/', views.MoodEntryListView.as_view(), name='mood-entry-list'),
    path('api/mood-entries/<int:pk>/', views.MoodEntryDetailView.as_view(), name='mood-entry-detail'),
    path('journal-entries/', JournalEntryListCreate.as_view(), name='journal-entries'),
    path('api/articles/', ArticleListCreateView.as_view(), name='article-list-create'),


]




