import {initializeApp} from "firebase/app"
// import * as firebase from "firebase"
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCMhiatTZuk8avGebeZLw7ADMoOpDFThGg",
  authDomain: "perfumeshop-44117.firebaseapp.com",
  projectId: "perfumeshop-44117",
  storageBucket: "perfumeshop-44117.appspot.com",
  messagingSenderId: "250123577567",
  appId: "1:250123577567:web:495cc5003217321e6b616a",
  measurementId: "G-7412R875CQ",
  bucket: "products"
};
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
