import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// App's firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-y7hcFgrS-SIlBEXMYe8s1mZyWL2f5e0",
  authDomain: "social-movie-e853a.firebaseapp.com",
  projectId: "social-movie-e853a",
  storageBucket: "social-movie-e853a.appspot.com",
  messagingSenderId: "13506008120",
  appId: "1:13506008120:web:4e56656d14315d1e43c2cd",
};
// Init firebase app
const app = initializeApp(firebaseConfig);

// Initializing the service
export const auth = getAuth(app);
