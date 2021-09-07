const firebaseConfig = {
      apiKey: "AIzaSyARxQ_FE6JS87ksouJp7uW2BV9or1LOMeE",
      authDomain: "kwitter-956ea.firebaseapp.com",
      databaseURL: "https://kwitter-956ea-default-rtdb.firebaseio.com",
      projectId: "kwitter-956ea",
      storageBucket: "kwitter-956ea.appspot.com",
      messagingSenderId: "27118897714",
      appId: "1:27118897714:web:74bcaa624e9da2f9e38a2b"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
