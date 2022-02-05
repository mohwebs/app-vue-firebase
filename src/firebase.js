// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCJ3GcYNM6_yJ0nWJ3JjitKKD1U9rGkgPY",
  authDomain: "app-vue-project-2404a.firebaseapp.com",
  projectId: "app-vue-project-2404a",
  storageBucket: "app-vue-project-2404a.appspot.com",
  messagingSenderId: "313614925145",
  appId: "1:313614925145:web:bbd77d302f1cd3d2dc2048",
  measurementId: "G-RZMW17X869"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;