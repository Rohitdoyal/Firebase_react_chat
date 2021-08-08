import React from 'react';
import './App.css';
import Signin from './components/Signin';
import Chat from './components/Chat';

import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from './firebase.js';
//import component



function App() {
  
  const [user] =useAuthState(auth); 
  //if user login the user is true else user is false 


  return (
    <>
  
      {user? <Chat/> : <Signin />}

    
    </>
  );
}

export default App;
