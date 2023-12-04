import {initializeApp} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {getDatabase,ref as refdb, onChildAdded} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
import {getStorage, ref as refst, getDownloadURL} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-storage.js";
   




const firebaseConfig = {
    apiKey: "AIzaSyB197JFM3SuLR1LFvKE033xg9PkXU-h1Cg",
    databaseURL: "https://aos-enactus-default-rtdb.firebaseio.com",
    authDomain: "aos-enactus.firebaseapp.com",
    projectId: "aos-enactus",
    storageBucket: "aos-enactus.appspot.com",
    messagingSenderId: "297551811772",
    appId: "1:297551811772:web:7aa36e186b64d5a72aecb9"
  };
   const app = initializeApp(firebaseConfig);

   const db = getDatabase();
   const storage = getStorage();
   console.log(storage);
function get_picture(link){
   
   return getDownloadURL(refst(storage,link))
     
   }
   function team_member(name,  title,image_){
     //Fetch container
     var team_container = document.getElementById("team-container");
     var member_container= document.createElement('div');
     var image =document.createElement('img');
     var text_container =document.createElement('div');
     var h3ele = document.createElement('h3');
     var pele = document.createElement('p');
     //Add classes
     member_container.classList.add('team-member');
     text_container.classList.add('w3-container');
     image.classList.add('team-image');
     
     //Text
   
     const personName = document.createTextNode(name);
     const job = document.createTextNode(title);
   
     //Add text to the nodes
   
     h3ele.appendChild(personName);
     pele.appendChild(job);
     
   
     //Add elements to body
     const storage = getStorage();

     image.src = image_;
     text_container.appendChild(h3ele);
     text_container.appendChild(pele);
     member_container.appendChild(image);
     member_container.appendChild(text_container);
     team_container.appendChild(member_container);
    
   
   
   }
                   
   const dbRef = refdb(db, "team_members");
   onChildAdded(dbRef, (data) => {
    team_member(data.val().name,data.val().job,data.val().image)
  });


   