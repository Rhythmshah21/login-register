// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTsvNZzy5G68sJ_u-eJ_Ti3TvOKEZBziQ",
  authDomain: "fir-login-24d34.firebaseapp.com",
  projectId: "fir-login-24d34",
  storageBucket: "fir-login-24d34.appspot.com",
  messagingSenderId: "413462570671",
  appId: "1:413462570671:web:606ebb54be8e683495965a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export default app

// const auth = getAuth();
// export {app,auth};