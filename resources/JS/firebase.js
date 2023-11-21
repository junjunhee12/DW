import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  addDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDpSC_KHkP_6Qta0gWV6-7FMyKNHvUlXeY",
  authDomain: "text-project-faee1.firebaseapp.com",
  projectId: "text-project-faee1",
  storageBucket: "text-project-faee1.appspot.com",
  messagingSenderId: "535717858011",
  appId: "1:535717858011:web:7af654c1602fc81b089afe",
  measurementId: "G-SJWJD1XZXG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
// console.log(db);

// 가져오기
async function getDatas(collectionName) {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot;
}

// 추가하기
async function addDatas(collectionName, dataObj) {
  await setDoc(doc(db, collectionName, "member"), dataObj);
}

export { db, getDocs, collection, getDatas, setDoc, addDoc, doc, addDatas };
