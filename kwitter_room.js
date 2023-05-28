
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
  
        user_name = localStorage.getItem("username");
        document.getElementById("user_name").innerHTML = "Welcome " + user_name +"!";
        
  
        function add_room()
            Room_name = document.getElementById("Room_name").value;
  
            firebase.database().ref("/").child(Room_name).update({
              purpose: "Adding Room Name"
            });
  
            localStorage.setItem("roomname", Room_name);
  
            window.location = "kwitter_page.html";
  
            
  
        function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("room_name - " + Room_names);
            row = "<div class='room_name' id="+Room_Names+" onclick='redirectToRoomName(this.is)'>#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML += row;
  
            //End code 
          }); }); }
        getData();
  
        function redirectToRoomName(name){
          console.log(name);
          localStorage.setItem("roomname",name);
          window.location = "kwitter_page.html";
        }
  
        function logout() {
          localStorage.removeItem("Room_name");
          localStorage.removeItem("user_name");
          window.location("index.html");
        }
  
