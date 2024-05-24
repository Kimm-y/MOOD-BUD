// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'
// import { createMoodEntry } from './MoodService';
// import JournalEntryForm from '../JournalEntries/JournalForm';
// import './Entries.css'

// const MoodEntryForm = ({ onSubmit }) => {
//     const [mood, setMood] = useState('');
//     // const [journalEntry, setJournalEntry] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await createMoodEntry({ mood });
//             // Handle successful submission
//         } catch (error) {
//             console.error('Failed to submit mood entry:', error);
//         }
//     };

//     return (
//         <>
       
//         <div className='foundation mt-5 mb-2 w-75 p-0 '>
//         {/* <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded mt-10 w-75 p-3 h-75 d-inline-block">  */}
//             <form onSubmit={handleSubmit} className= 'position-absolute top-0 start-50 translate-middle-x'>
//                 <select value={mood} onChange={(e) => setMood(e.target.value)}>
//                     <option value="">Select your mood</option>
//                     <option value="Amazing">Amazing 😃</option>
//                     <option value="Good">Good 🙂</option>
//                     <option value="Meh">Meh 😐</option>
//                     <option value="Sad">Sad 😔</option>
//                     <option value="Angry">Angry 😠</option>
//                 </select>

//                 {/* <textarea value={journalEntry} onChange={(e) => setJournalEntry(e.target.value)} placeholder="Today's journal entry..." /> */}
//                 <button  className='btn btn-outline-primary' type="submit">Submit</button>
//             </form>
//             <JournalEntryForm />
//             <Link to= '/home'><button className=' d-grid gap-2 d-md-block btn btn-outline-primary btn-lg position-absolute bottom-0 start-50 translate-middle-x'> BACK HOME</button></Link>
//             </div>
            
//             {/* </div>
//              */}
//         </>
//     );
// };

// export default MoodEntryForm;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { createMoodEntry } from './MoodService';
// import JournalEntryForm from '../JournalEntries/JournalForm';

// const MoodEntryForm = ({ onSubmit }) => {
//     const [mood, setMood] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await createMoodEntry({ mood });
//             // Handle successful submission
//         } catch (error) {
//             console.error('Failed to submit mood entry:', error);
//         }
//     };

//     return (
//         <div className="container my-5">
//             <div className="row justify-content-center mb-4">
//                 <div className="col-md-6">
//                     <div className="card p-4 shadow-sm" >
//                         <h2 className="text-center mb-4">Mood Tracker</h2>
//                         <form onSubmit={handleSubmit}>
//                             <div className="mb-3">
//                                 <select
//                                     value={mood}
//                                     onChange={(e) => setMood(e.target.value)}
//                                     className="form-select"
//                                 >
//                                     <option value="">Select your mood</option>
//                                     <option value="Amazing">Amazing 😃</option>
//                                     <option value="Good">Good 🙂</option>
//                                     <option value="Meh">Meh 😐</option>
//                                     <option value="Sad">Sad 😔</option>
//                                     <option value="Angry">Angry 😠</option>
//                                 </select>
//                             </div>
//                             <div className="d-grid">
//                                 <button type="submit" className="btn btn-primary">
//                                     Submit
//                                 </button>
//                             </div>
//                         </form>
                   
//                 </div>
//             </div>

//             <div className="row justify-content-center mb-4">
//                 <div className="col-md-8">
//                     <div >
//                         <JournalEntryForm />
//                     </div>
//                 </div>
//             </div>

//             <div className="row justify-content-center">
//                 <div className="col-md-6 text-center">
//                     <Link to="/home">
//                         <button className="btn btn-secondary btn-lg">
//                             BACK HOME
//                         </button>
//                     </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MoodEntryForm;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createMoodEntry } from './MoodService';
import JournalEntryForm from '../JournalEntries/JournalForm';  

const MoodEntryForm = () => {
    const [mood, setMood] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createMoodEntry({ mood });
            console.log('Mood entry submitted successfully');
            setMood('');  
        } catch (error) {
            console.error('Failed to submit mood entry:', error);
        }
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card p-4 shadow-sm">
                        <h2 className="text-center mb-4">Mood Tracker</h2>
                        <form onSubmit={handleSubmit} className="mb-4">
                            <div className="mb-3">
                                <select
                                    value={mood}
                                    onChange={(e) => setMood(e.target.value)}
                                    className="form-select"
                                >
                                    <option value="">Select your mood</option>
                                    <option value="Amazing">Amazing 😃</option>
                                    <option value="Good">Good 🙂</option>
                                    <option value="Meh">Meh 😐</option>
                                    <option value="Sad">Sad 😔</option>
                                    <option value="Angry">Angry 😠</option>
                                </select>
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                        </form>

                        <div className="mb-4">
                            <JournalEntryForm />
                        </div>

                        <div className="text-center">
                            <Link to="/home">
                                <button className="btn btn-secondary btn-lg">
                                    BACK HOME
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoodEntryForm;

