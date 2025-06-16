// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMccPTn3GDE0nYzFI73DxwtcIxaymC-0w",
  authDomain: "todo-app-d75ca.firebaseapp.com",
  projectId: "todo-app-d75ca",
  storageBucket: "todo-app-d75ca.firebasestorage.app",
  messagingSenderId: "788803386311",
  appId: "1:788803386311:web:2e298862300ba4ec3b37e2",
  measurementId: "G-D2338WWENS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
//const analytics = getAnalytics(app);
