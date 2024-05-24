
import React, { useState } from 'react';

const JournalEntryForm = () => {
    const [journalEntry, setJournalEntry] = useState('');

    const handleJournalSubmit = (e) => {
        e.preventDefault();
        // Handle journal entry submission
    };

    return (
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
    );
};

export default JournalEntryForm;


