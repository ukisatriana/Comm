import { 
  auth,
  signInWithEmailAndPassword,
  signOut,
  googleAuthProvider, 
  facebookAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  getFirestore,
  doc,
  setDoc
} from 'auth/FirebaseAuth';

const FirebaseService = {}

FirebaseService.signInEmailRequest = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password).then(user => user).catch(err => err);
}

FirebaseService.signOutRequest = async () =>
	await signOut(auth).then(user => user).catch(err => err);

FirebaseService.signInGoogleRequest = async () =>
  await signInWithPopup(auth, googleAuthProvider).then(user => user).catch(err => err);

FirebaseService.signInFacebookRequest = async () =>
  await signInWithPopup(auth, facebookAuthProvider).then(user => user).catch(err => err);

FirebaseService.signUpEmailRequest = async (email, password) =>
	await createUserWithEmailAndPassword(auth, email, password).then(user => user).catch(err => err);	

FirebaseService.createUser = async (email, password, additionalData) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Add additional user data to Firestore
    const db = getFirestore();
    await setDoc(doc(db, 'users', user.uid), {
      email: user.email,
      ...additionalData
    });

    return user;
  } catch (error) {
    throw error;
  }
}
	
export default FirebaseService