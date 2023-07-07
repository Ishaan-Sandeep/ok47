var firebaseConfig = {
   apiKey: "AIzaSyD0HS48KdkR8_R7AIlWt3RsznaTRyc7Lrs",
   authDomain: "kwiter-9cdcf.firebaseapp.com",
   databaseURL: "https://kwiter-9cdcf-default-rtdb.firebaseio.com",
   projectId: "kwiter-9cdcf",
   storageBucket: "kwiter-9cdcf.appspot.com",
   messagingSenderId: "342313815014",
   appId: "1:342313815014:web:70e4b83881111dfe206427"
 };
 firebase.initializeApp(firebaseConfig);
 user_name = localStorage.getItem("user_name")
 document.getElementById("user_name").innerHTML = "Welcome " + user_name;

 function addRoom() {
 room_name = document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update({
   purpose : "adding room name"
 });
 localStorage.setItem("room_name" , room_name);
 window.location = "chat_page.html"  
 }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names)
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function redirectToRoomName(name) {
   console.log("name " + name);
   localStorage.setItem("room_name" , name);
   window.location = "kwitter_page.html"
}

function logout() {
   localStorage.removeItem("room_name")
   localStorage.removeItem("user_name")
   window.location = "index.html"
}
