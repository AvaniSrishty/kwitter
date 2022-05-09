var firebaseConfig = {
  apiKey: "AIzaSyBN6ReCkO-Ga84_2QJjW470Dl44Nf1P-2o",
  authDomain: "kwitnew-fa301.firebaseapp.com",
  databaseURL: "https://kwitnew-fa301-default-rtdb.firebaseio.com",
  projectId: "kwitnew-fa301",
  storageBucket: "kwitnew-fa301.appspot.com",
  messagingSenderId: "580789713270",
  appId: "1:580789713270:web:a08fd4a4cf6798812be257"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Your web app's Firebase configuration 
 /* var firebaseConfig = { apiKey: "AIzaSyA8T2RXn-NT0gfJqmy4kemADuBlsYYckYQ", authDomain: "kwitnew-4e343.firebaseapp.com", databaseURL: "https://kwitnew-4e343-default-rtdb.firebaseio.com", projectId: "kwitnew-4e343", storageBucket: "kwitnew-4e343.appspot.com", messagingSenderId: "705805326323", appId: "1:705805326323:web:6a26236b3a2a5e1988e486" }; // Initialize Firebase 
  firebase.initializeApp(firebaseConfig);*/
  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
  function addRoom()
  {
   room_value = document.getElementById("room_name_text").value;
  console.log(room_value)
    firebase.database().ref("/").child(room_value).update({
      user : "value"
    });
    console.log(room_value)
      localStorage.setItem("room_name", room_value);
      
      window.location = "kwitter_page.html";
  }
  
  
  
  function logout()  {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }

  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name - " + Room_names);
    row = "<div id = '"+Room_names+"' onclick = 'redirectToRoomName(this.id)'>"+Room_names+ "</div>"
//row = "<div class = 'room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'> +" + Room_names+ "</div>" 
//   row = "<div id =" +Room_names+" onclick = 'redirectToRoomName()'>" +Room_names+"</div>"
   console.log(row)
  
   document.getElementById("output").innerHTML += row;
 });
});

}

getData();

function redirectToRoomName(name) {
  console.log(name)
  localStorage.setItem("room_name", name)
  window.location="Kwitter_page.html"
}