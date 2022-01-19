// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDYzyd-eZusahlGLn8ntCEoIfzK-bW1mR4",
    authDomain: "test-app-cc5bb.firebaseapp.com",
    databaseURL: "https://test-app-cc5bb-default-rtdb.firebaseio.com",
    projectId: "test-app-cc5bb",
    storageBucket: "test-app-cc5bb.appspot.com",
    messagingSenderId: "284349203788",
    appId: "1:284349203788:web:78ed72ff50671a87cdfbe9"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

  function addUser(){
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }