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
u_n = localStorage.getItem("Meee");
r_n = localStorage.getItem("Book");

function Send()
{
      Msg = document.getElementById("HunGa").value;
      firebase.database().ref(r_n).push({
            name: u_n,
            Message: Msg,
            like: 0
      });
      document.getElementById("HunGa").value= "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

console.log(firebase_message_id);
console.log(message_data);
name= message_data['name'];
like=message_data['like'];
message=message_data['Message'];
Ntag="<h4>"+name+"<img class='user_click'src='tick.png'></h4>";
Mtag= "<h4 class='message_h4>"+message+"</h4>";
Ltag= "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='Update(this.id)'>";
Stag="<span class='glyphicon glyphicon-thumbs-up'>Like:: "+like+"</span></button>";
row= Ntag+Mtag+Ltag+Stag;
document.getElementById("output").innerHTML+=row;

      } });  }); }
getData();
function Update(message_id)
{
console.log("Click on like button"+message_id);
Button_id = message_id;
Likes= document.getElementById(Button_id).value;
UpdateLive=Number(Likes)+1;
console.log(UpdateLive);
firebase.database().ref(r_n).child(message_id).Update({
      like:UpdateLive
});
}
function logout()
{
      localStorage.removeItem("Meee");
      localStorage.removeItem("Book");
      window.location.replace("index.html");
}