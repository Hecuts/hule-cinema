// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseOptions, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDtLhy7R30Kkhm47H8QnnKLuLdL4UalMqY",
	authDomain: "ethio-cenema.firebaseapp.com",
	projectId: "ethio-cenema",
	storageBucket: "ethio-cenema.appspot.com",
	messagingSenderId: "651722484353",
	appId: "1:651722484353:web:d4d8644e056af430073b80",
};

const createFirebaseApp = (firebaseConfig) => {
	try {
		return getApp();
	} catch (error) {
		return initializeApp(firebaseConfig);
	}
};
// Initialize Firebase
const firebaseApp = createFirebaseApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore();

// const app = !getApp() ? initializeApp(firebaseConfig) : getApp();
// const db = getFirestore();
// const auth = getAuth();

// export default app;
// export { db, auth };
