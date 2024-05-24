from django.urls import path
from . import views
from .views import JournalEntryListCreate
from .views import scrape_psychology_today_articles

urlpatterns = [
    path('mood-entries/', views.MoodEntryListView.as_view(), name='mood-entry-list'),
    path('mood-entries/<int:pk>/', views.MoodEntryDetailView.as_view(), name='mood-entry-detail'),
    path('journal-entries/', JournalEntryListCreate.as_view(), name='journal-entries'),
    path('scrape-articles/', scrape_psychology_today_articles, name='scrape-articles'),


]




