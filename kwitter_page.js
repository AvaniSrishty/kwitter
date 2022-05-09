//YOUR FIREBASE LINKS
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

    user_nmae = localStorage.getItem(user_nmae)
    room_name = localStorage.getItem(room_name)

    function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }

      getData();
