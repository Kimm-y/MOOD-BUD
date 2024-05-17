import React, { useState } from 'react';
import { createMoodEntry } from './MoodService';
import JournalEntryForm from '../JournalEntries/JournalForm';

const MoodEntryForm = ({ onSubmit }) => {
    const [mood, setMood] = useState('');
    // const [journalEntry, setJournalEntry] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createMoodEntry({ mood, journalEntry });
           
        } catch (error) {
          
            console.error('Failed to submit mood entry:', error);
        }
    };
    

    return (
        <>  
        <JournalEntryForm/>
        <form onSubmit={handleSubmit}>
          <select value={mood} onChange={(e) => setMood(e.target.value)}>
                <option value="">Select Mood</option>
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="anxious">Anxious</option>
                <option value="angry">angry</option>
                
            </select>
            {/* <textarea value={journalEntry} onChange={(e) => setJournalEntry(e.target.value)} placeholder="Today journal entry..." /> */}
           
            <button type="submit">Submit</button>
        </form>
        </> 
       )
};

export default MoodEntryForm;
