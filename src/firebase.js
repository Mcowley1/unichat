import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyA2UdiXmkRjVZs3xPOduiQO8rPLrRYV340",
    authDomain: "unichat-6a480.firebaseapp.com",
    projectId: "unichat-6a480",
    storageBucket: "unichat-6a480.appspot.com",
    messagingSenderId: "589656924450",
    appId: "1:589656924450:web:313f5594e6456cb8d7857b"
  }).auth();