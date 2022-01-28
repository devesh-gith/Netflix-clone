import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCoC0phnrKE6zFOCLOCf4HMA37UI-pTPxU",
  authDomain: "netflix-clone-ad9d7.firebaseapp.com",
  projectId: "netflix-clone-ad9d7",
  storageBucket: "netflix-clone-ad9d7.appspot.com",
  messagingSenderId: "420777865779",
  appId: "1:420777865779:web:d32f6f677ec0c0fcb96946",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth };
export default db;
