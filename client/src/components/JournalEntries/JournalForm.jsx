

// import React, { useState } from 'react';
// import api from '../../Api.jsx';

// const JournalForm = () => {
//     const [entry, setEntry] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await api.post('journal-entries/', { entry });
//             console.log('Journal entry submitted successfully:', response.data);
//             setEntry('');  
//         } catch (error) {
//             console.error('Failed to submit journal entry', error);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit} className='  mb-3 position-absolute top-50 start-50 translate-middle'>
//             <textarea
//                 value={entry}
//                 onChange={(e) => setEntry(e.target.value)}
//                 placeholder="Write your journal entry..."
//                 className='w-100 p-3 h-100 d-inline-block'
//             />
//             <button className='btn btn-outline-primary ' type="submit">Submit</button>
//         </form>
//     );
// };

// export default JournalForm;

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


