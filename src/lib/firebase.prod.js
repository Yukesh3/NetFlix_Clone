import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import {seedDatabase} from '../seed';

  let config = {
    apiKey: "AIzaSyCC8HO3KxarjEnnj9F8MJh7y46IFppKQOY",
    authDomain: "netflix-ce0cd.firebaseapp.com",
    projectId: "netflix-ce0cd",
    storageBucket: "netflix-ce0cd.appspot.com",
    messagingSenderId: "465464999794",
    appId: "1:465464999794:web:90ffaf325f4268d22567eb"
 }
 const firebase = Firebase.initializeApp(config);

 export { firebase };

