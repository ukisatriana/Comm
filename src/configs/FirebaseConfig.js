
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getFirestore } from 'firebase/firestore';
import { get } from 'lodash';


const FirebaseConfig = {
  apiKey: "AIzaSyASK9gBMDV9khOldVhGlNYtoFFGpEewjAE",
  authDomain: "ccms-wika.firebaseapp.com",
  projectId: "ccms-wika",
  storageBucket: "ccms-wika.appspot.com",
  messagingSenderId: "739162463129",
  appId: "1:739162463129:web:b0118fb3d61108430f1108",
  measurementId: "G-BP9C1W9XFD"
};

// Initialize Firebase

const app = initializeApp(FirebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
const currentUser = auth.currentUser;
export const database = getDatabase(app);

export { auth, storage, app, analytics, currentUser, db };
export default FirebaseConfig
