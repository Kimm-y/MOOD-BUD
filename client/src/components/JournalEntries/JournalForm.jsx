// src/components/JournalEntryForm.jsx

import React, { useState } from 'react';
import api from '../../Api.jsx';

const JournalForm = () => {
    const [entry, setEntry] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('journal-entries/', { entry });
            console.log('Journal entry submitted successfully:', response.data);
            setEntry('');  
        } catch (error) {
            console.error('Failed to submit journal entry', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
                placeholder="Write your journal entry..."
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default JournalForm;

