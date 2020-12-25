import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import StartPage from './StartPage';
import MainPage from './MainPage';
import FirebaseContext from './context/FirebaseContext';
import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

function App() {

  const [firebaseConfig, setFirebaseConfig] = useState(undefined);

  const initFirebaseApp = (data) => {

    //Initialize Firebase
    const fire = firebase.initializeApp(data.config);

    //Storing all settings and config parameters in Context
    let finalConfig = data

    finalConfig.fire = fire;

    let auth = firebase.auth();
    if (data.settings.auth.useEmulator) {
      auth.useEmulator("http://localhost:" + data.settings.auth.port + "/");
    }

    finalConfig.auth = auth;

    let db = firebase.firestore();

    if (data.settings.firestore.useEmulator) {
      db.useEmulator("localhost", data.settings.firestore.port);
    }

    finalConfig.db = db;
    finalConfig.timestamp = firebase.firestore.Timestamp;
    finalConfig.fieldValue = firebase.firestore.FieldValue;

    setFirebaseConfig(finalConfig);

    //The context can be used by all child components - 
    //the context will have the settings and config parameters - 
    //as well as 'fire', 'db' (for firestore), 'auth', 'timestamp' and 'fieldValue' properties to run firebase commands.

  }
  return (
    <FirebaseContext.Provider value={firebaseConfig}>
      <Header />
      <div className="content-page">
        {typeof firebaseConfig === "undefined" ?
          <StartPage handleConfigChange={initFirebaseApp} /> :
          <MainPage />
        }
      </div>
      <Footer />
    </FirebaseContext.Provider>
  );
}

export default App;
