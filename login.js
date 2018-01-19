function login(){

      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyBw8GMjN-xcDmCtDiO6LcK7gNwsjWWF0ak",
        authDomain: "phone-status-desktop.firebaseapp.com",
        databaseURL: "https://phone-status-desktop.firebaseio.com",
        projectId: "phone-status-desktop",
        storageBucket: "phone-status-desktop.appspot.com",
        messagingSenderId: "404407908944"
      };
      firebase.initializeApp(config);

      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      }
  );

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('Success');
      window.location.assign("batterylevel.html")
    } else {
      console.log('Error');
    }
  });
       
        
      }