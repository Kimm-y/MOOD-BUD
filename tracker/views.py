from rest_framework import generics
from .models import MoodEntry
from .models import JournalEntry
from .models import Article
from .serializers import JournalEntrySerializer
from .serializers import MoodEntrySerializer
from .serializers import ArticleSerializer

class MoodEntryListView(generics.ListCreateAPIView):
    queryset = MoodEntry.objects.all()
    serializer_class = MoodEntrySerializer

class MoodEntryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = MoodEntry.objects.all()
    serializer_class = MoodEntrySerializer

class JournalEntryListCreate(generics.ListCreateAPIView):
    queryset = JournalEntry.objects.all()
    serializer_class = JournalEntrySerializer


class ArticleListCreateView(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer