
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyCO7uChmmL1mFsZ4m6LLj8FlOvSXbor4I4',
  authDomain: 'irwin-tools.firebaseapp.com',
  projectId: 'irwin-tools',
  storageBucket: 'irwin-tools.appspot.com',
  messagingSenderId: '909693817919',
  appId: '1:909693817919:web:b94f2a8d0390539b5c948a',
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;