import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDcXojnAaI3nQkly8LX7TsZW5abD8QT4wo",
  authDomain: "zdfronpol18.firebaseapp.com",
  projectId: "zdfronpol18",
  storageBucket: "zdfronpol18.appspot.com",
  messagingSenderId: "773332755702",
  appId: "1:773332755702:web:3150d2d84d5d4ed5f578d7"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);