
import React from 'react';


import UserProfile from './components/UserProfile';
import ToDoList from './components/ToDoList';
import Weather from './components/Weather';
import './App.css'; // Import your CSS file for styling


  const App = () => {
    // Example user data (can be hardcoded or fetched from an API)
    const user = {
      name: 'Vishwa Patel',
      email: 'vishwa@example.com',
      profilePicture: './cool-profile-pic.jpeg'
    };
  return (
   
      <div className="App">
        
        <div>
      <h1>User Profile</h1>
      <UserProfile 
        name={user.name}
        email={user.email}
        profilePicture={user.profilePicture}
      />
    </div>
            
            <ToDoList />
            <Weather />
         
          {/* Add more routes if needed */}
        
      </div>
    
  );
}

export default App;
