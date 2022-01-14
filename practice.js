
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAuUJwNtr9Kym1PyNtni__rD-vRMwkuhsM",
    authDomain: "myproject-baa7e.firebaseapp.com",
    databaseURL: "https://myproject-baa7e-default-rtdb.firebaseio.com",
    projectId: "myproject-baa7e",
    storageBucket: "myproject-baa7e.appspot.com",
    messagingSenderId: "199036928469",
    appId: "1:199036928469:web:b639ea459cb42e1390fd5c"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   function UserName()
   {
        user_name = document.getElementById("Type").value;
        firebase.database().ref("/").child(user_name).update({
            identify: "Figure"
        });
   }