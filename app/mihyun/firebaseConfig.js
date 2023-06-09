import firebase from "firebase/compat/app";

// 사용할 파이어베이스 서비스 주석을 해제합니다 
// import "firebase/compat/auth"; 
import "firebase/compat/database"; 
// import "firebase/compat/firestore"; 
// import "firebase/compat/functions"; 
import "firebase/compat/storage";  

// Initialize Firebase; 
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다 (보안 중요!)

const firebaseConfig = {
    apiKey: "AIzaSyBfDW5Oe6sSCk9r87yJRxVXRmp4M5_O7b8",
    authDomain: "mihyun-f4e7b.firebaseapp.com",
    projectId: "mihyun-f4e7b",
    databaseURL:"https://mihyun-f4e7b-default-rtdb.asia-southeast1.firebasedatabase.app/",
    storageBucket: "mihyun-f4e7b.appspot.com",
    messagingSenderId: "703262964941",
    appId: "1:703262964941:web:dc30942e02f33ea66e7d84",
    measurementId: "G-D6Z69Y569L"
};

  //사용 방법입니다.  
  //파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다. 
  if (!firebase.apps.length) {        
      firebase.initializeApp(firebaseConfig); 
  }  
  
  export const firebase_db = firebase.database()  //데이터베이스 정보로 바로 조회 가능