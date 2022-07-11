import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';
import { firebase } from './lib/firebase.prod'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>
);
 
