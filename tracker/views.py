from rest_framework import generics
from .models import MoodEntry
from .models import JournalEntry
from .serializers import JournalEntrySerializer
from .serializers import MoodEntrySerializer

class MoodEntryListView(generics.ListCreateAPIView):
    queryset = MoodEntry.objects.all()
    serializer_class = MoodEntrySerializer

class MoodEntryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = MoodEntry.objects.all()
    serializer_class = MoodEntrySerializer

class JournalEntryListCreate(generics.ListCreateAPIView):
    queryset = JournalEntry.objects.all()
    serializer_class = JournalEntrySerializer
