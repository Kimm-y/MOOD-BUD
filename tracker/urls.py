from django.urls import path
from . import views
from .views import JournalEntryListCreate

urlpatterns = [
    path('api/mood-entries/', views.MoodEntryListView.as_view(), name='mood-entry-list'),
    path('api/mood-entries/<int:pk>/', views.MoodEntryDetailView.as_view(), name='mood-entry-detail'),
    path('journal-entries/', JournalEntryListCreate.as_view(), name='journal-entries'),

]




