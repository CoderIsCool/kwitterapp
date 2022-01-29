var firebaseConfig =    {
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

     
//ADD YOUR FIREBASE LINKS HERE
add_user = localStorage.getItem("Meee")
document.getElementById("Welcome...").innerHTML = "Welcome "+add_user+"!";

function AddRoom()
{
   Room_name = document.getElementById("Room_Name").value;
   firebase.database().ref("/").child(Room_name).update({
         Book: "Lire"
   }); 
   localStorage.setItem("Book",Room_name); 
   window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room_name - "+ Room_names);
      Row = "<div class='Hello' id="+Room_names+"onclick='Redirect(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += Row;
 
      });});}
getData();

function Redirect(name)
{
      console.log(name);
      localStorage.setItem("Fiore",name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("Meee");
      localStorage.removeItem("Book")
      window.location = "index.html";
}