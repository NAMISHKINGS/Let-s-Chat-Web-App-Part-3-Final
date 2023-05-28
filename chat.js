// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

const firebaseConfig = {
    apiKey: "AIzaSyAZEgzGfeMeM4hEvV-ezPx23Nam6XOfGqQ",
    authDomain: "let-s-chat-web-app-91005.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-91005-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-91005",
    storageBucket: "let-s-chat-web-app-91005.appspot.com",
    messagingSenderId: "756283020979",
    appId: "1:756283020979:web:c7ae2b222e41d7fec182c6",
    measurementId: "G-4D2MJ0N96N"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



