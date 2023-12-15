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
  query,
  orderBy,
  limit,
  startAfter,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAjeUmClsxyPZ0wuPKH9nyCXHiqd_P1Voo",
  authDomain: "project-b0193.firebaseapp.com",
  projectId: "project-b0193",
  storageBucket: "project-b0193.appspot.com",
  messagingSenderId: "737057507941",
  appId: "1:737057507941:web:1ec506e63a85339b17548c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getDatas(collectionName, order, limitNum, lq) {
  // const querySnapshot = await getDocs(collection(db, collectionName));
  let docQuery;
  if (lq === undefined) {
    docQuery = query(
      collection(db, collectionName),
      orderBy(order, "desc"),
      limit(limitNum)
    );
  } else {
    docQuery = query(
      collection(db, collectionName),
      orderBy(order, "desc"),
      startAfter(lq),
      limit(limitNum)
    );
  }
  const querySnapshot = await getDocs(docQuery);
  // orderBy(어떤 필드 , asc(어센딩,오름차순) 또는 desc(디센딩,내림차순) )
  // 쿼리 query
  // orderBy, limit,startAfter
  const result = querySnapshot.docs;
  const lastQuery = result[result.length - 1];
  // console.log(lastQuery);
  const reviews = result.map((doc) => doc.data());
  return { reviews, lastQuery };
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
};
