function add_room()
{
    room_name=document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name)
      window.location="kwitter_page.html"
}
function getData()
{
Firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
<div>
    
</div>
//End code
});});}
getData();