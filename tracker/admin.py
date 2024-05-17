from django.contrib import admin

# Register your models here.


from .models import MoodEntry

class MoodEntryAdmin(admin.ModelAdmin):
    list_display = ('user', 'mood' ,'journal_entry' ,'created_at')

# Register your models here.

admin.site.register(MoodEntry, MoodEntryAdmin)