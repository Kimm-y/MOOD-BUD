// JournalEntryForm.jsx
import React, { useState } from 'react';

const JournalEntryForm = ({ onSubmit }) => {
    const [entry, setEntry] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted', entry);
        onSubmit(entry);
        setEntry('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea value={entry} onChange={(e) => setEntry(e.target.value)} placeholder="Write your journal entry..." />
            <button type="submit">Submit</button>
        </form>
    );
};

export default JournalEntryForm;

