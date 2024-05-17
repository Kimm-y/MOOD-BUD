// import React from 'react';
// // import Header from './components/Common/Header';
// import MoodEntriesList from './components/MoodEntries/MoodEntriesList';
// // import Footer from './components/Common/Footer';
// import './App.css'


// const App = () => {
//     return (
//         <div>
//             {/* <Header /> */}
//             <MoodEntriesList />
//             {/* <Footer /> */}
//         </div>
//     );
// };

// export default App;

import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Switch } from 'react-router-dom';
import Login from './components/Authentication/Login';
import './App.css'
// import Form from './components/MoodEntries/Form'
// import JournalEntryForm from './components/JournalEntries/JournalForm';



function App() {

  const MoodTrackingPage = () => {
    const handleSubmit = (data) => {
        console.log(data);
    };
  
    MoodTrackingPage()

  return (
    <div>
       <div className='box'>
          <h1 className='heading'>Login to continue</h1>
          <button className='sign-in-button'><Link to="/login">Login</Link></button>
          </div>

            <h1>Mood Tracking</h1>
            <Form onSubmit={handleSubmit} /><Form/>

            {/* <h1> Journal Entry</h1>
            <JournalEntryForm/> */}
            
            
            <Router>
           
            <Route path="/login" component={Login} />
            {/*  authentication-related components- registration and stuff */}
       
            </Router> 
      
    </div>
  )
};
}
export default App
