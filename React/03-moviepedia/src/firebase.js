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
  // apiKey: "AIzaSyA2DdInAeLGCLX0Tr2Ndl_VeCzcSCPMbqg",
  // authDomain: "project0304-24910.firebaseapp.com",
  // projectId: "project0304-24910",
  // storageBucket: "project0304-24910.appspot.com",
  // messagingSenderId: "673730811021",
  // appId: "1:673730811021:web:8df4399142109e6b943ec4",

  apiKey: "AIzaSyAiEJMrrT3KxhDALd0ZycM9d9aNI3GgkQg",
  authDomain: "project0304-dd513.firebaseapp.com",
  projectId: "project0304-dd513",
  storageBucket: "project0304-dd513.appspot.com",
  messagingSenderId: "205045376537",
  appId: "1:205045376537:web:4c1fd391fc614eb5b5ac88",
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
