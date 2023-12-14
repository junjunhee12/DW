// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
// import 추가
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  setDoc,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  deleteField,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyA2DdInAeLGCLX0Tr2Ndl_VeCzcSCPMbqg",
  authDomain: "project0304-24910.firebaseapp.com",
  projectId: "project0304-24910",
  storageBucket: "project0304-24910.appspot.com",
  messagingSenderId: "673730811021",
  appId: "1:673730811021:web:8df4399142109e6b943ec4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getDatas(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const result = querySnapshot.docs;
  const reviews = result.map((doc) => doc.data());
  return { reviews };
}

// 내보내기
export {
  db,
  getDocs,
  collection,
  setDoc,
  addDoc,
  getDatas,
  doc,
  deleteDoc,
  updateDoc,
  deleteField,
};
