import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAengpj_jnOt4bpoLqM99WjehxhXc4OqGk',
  authDomain: 'facebook-clone-imran.firebaseapp.com',
  projectId: 'facebook-clone-imran',
  storageBucket: 'facebook-clone-imran.appspot.com',
  messagingSenderId: '433635432979',
  appId: '1:433635432979:web:fa5ff36ba7446ab8fefde6',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
