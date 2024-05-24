
import React, { useState } from 'react';
import { createJournalEntry } from './JournalService';

const JournalEntryForm = () => {
    const [journalEntry, setJournalEntry] = useState('');

    const handleJournalSubmit = async (e) => {
        e.preventDefault();
        try {
            await createJournalEntry(journalEntry);
            console.log('Journal entry submitted successfully');
            setJournalEntry('');  
        } catch (error) {
            console.error('Failed to submit journal entry', error);
        }
    };

    return (
        <>
            <form onSubmit={handleJournalSubmit}>
                <div className="mb-3">
                    <textarea
                        value={journalEntry}
                        onChange={(e) => setJournalEntry(e.target.value)}
                        placeholder="Write your journal entry here..."
                        className="form-control"
                        rows="10"
                    ></textarea>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Submit Journal Entry
                    </button>
                </div>
            </form>
        </>
    );
};

export default JournalEntryForm;
