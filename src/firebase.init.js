// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};



// const firebaseConfig = {
//   apiKey: "AIzaSyCeCPkGW0mQo_bAo_erFv9SaWF7_F3vOhE",
//   authDomain: "rocket-rock-cce05.firebaseapp.com",
//   projectId: "rocket-rock-cce05",
//   storageBucket: "rocket-rock-cce05.appspot.com",
//   messagingSenderId: "738580377775",
//   appId: "1:738580377775:web:56db7a9e200cc99bf4a45a"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth