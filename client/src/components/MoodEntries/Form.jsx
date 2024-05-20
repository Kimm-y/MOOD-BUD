import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { createMoodEntry } from './MoodService';
import JournalEntryForm from '../JournalEntries/JournalForm';
import './Entries.css'

const MoodEntryForm = ({ onSubmit }) => {
    const [mood, setMood] = useState('');
    // const [journalEntry, setJournalEntry] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createMoodEntry({ mood });
            // Handle successful submission
        } catch (error) {
            console.error('Failed to submit mood entry:', error);
        }
    };

    return (
        <>
        <div className='foundation'>
            <form onSubmit={handleSubmit} className='mood'>
                <select value={mood} onChange={(e) => setMood(e.target.value)}>
                    <option value="">Select your mood</option>
                    <option value="Amazing">Amazing 😃</option>
                    <option value="Good">Good 🙂</option>
                    <option value="Meh">Meh 😐</option>
                    <option value="Sad">Sad 😔</option>
                    <option value="Angry">Angry 😠</option>
                </select>
                {/* <textarea value={journalEntry} onChange={(e) => setJournalEntry(e.target.value)} placeholder="Today's journal entry..." /> */}
                <button  type="submit">Submit</button>
            </form>
            <JournalEntryForm />
            <Link to= '/home'><button> BACK HOME</button></Link>
            
            </div>
        </>
    );
};

export default MoodEntryForm;
