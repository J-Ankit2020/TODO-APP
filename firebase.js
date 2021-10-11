const firebaseConfig = {
  apiKey: "AIzaSyCSKRZWF1Kh3cN-i7kGlrKWPPd8y9Lk4ew",
  authDomain: "todo-list-a5a83.firebaseapp.com",
  projectId: "todo-list-a5a83",
  storageBucket: "todo-list-a5a83.appspot.com",
  messagingSenderId: "1067590414736",
  appId: "1:1067590414736:web:9e1c99521bc7b6fb59c315",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
