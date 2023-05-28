var firebaseConfig = {
    apiKey: "AIzaSyBXKZpF5HeImUG7hNtBG-GdysUxgKKg_bw",
    authDomain: "kwitter-e4e29.firebaseapp.com",
    databaseURL: "https://kwitter-e4e29-default-rtdb.firebaseio.com",
    projectId: "kwitter-e4e29",
    storageBucket: "kwitter-e4e29.appspot.com",
    messagingSenderId: "80579931110",
    appId: "1:80579931110:web:6ff1d63c5b4a7336c30427",
    measurementId: "G-9BTN0HS2M3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  add_room = localStorage.getItem("Room_name");
  add_room = localStorage.getItem("Room_name");

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;

    //Start code

    //End code

}); }); }
getData();