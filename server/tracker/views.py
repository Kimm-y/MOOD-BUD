from rest_framework import generics
from bs4 import BeautifulSoup
import requests
from django.http import JsonResponse
from .models import MoodEntry
from .models import JournalEntry
from .models import Article
from .serializers import JournalEntrySerializer
from .serializers import MoodEntrySerializer
from .serializers import ArticleSerializer
from rest_framework.response import Response
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

 

def scrape_psychology_today_articles(request):
    url = 'https://www.psychologytoday.com/us'
    response = requests.get(url)
    if response.status_code != 200:
        return JsonResponse({'error': 'Failed to retrieve articles'}, status=500)
    
    soup = BeautifulSoup(response.content, 'html.parser')
    articles = []

    
    for article in soup.find_all('div', class_='teaser-lg__details'):  
        title_tag = article.find('h2', class_='teaser-lg__title')
        content_tag = article.find('p', class_='teaser-lg__summary teaser-lg__teaser--desktop')

        if title_tag and content_tag:
            title = title_tag.get_text()
            content = content_tag.get_text()
            articles.append({'title': title, 'content': content})
    
    return JsonResponse(articles, safe=False)

