import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyDcbHJF715W_lBtx_pL4ejYX5H-rzCzIz8',
  authDomain: 'ninja-chat-app.firebaseapp.com',
  databaseURL: 'https://ninja-chat-app.firebaseio.com',
  projectId: 'ninja-chat-app',
  storageBucket: 'ninja-chat-app.appspot.com',
  messagingSenderId: '527657836998',
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();
