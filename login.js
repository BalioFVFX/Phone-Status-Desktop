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
      
        var database = firebase.database();
        return firebase.database().ref('users/' + document.getElementById('username').value).once('value').then(function(snapshot){
          var thepass = (snapshot.val().password.pass);
          document.getElementById('loginText').innerHTML = thepass;
          if(thepass == document.getElementById('password').value){
            
            var fs = require('fs');
            fs.writeFile("username.js", "var currentUsername = " + "'" + document.getElementById('username').value + "'", function(err) {
                if(err) {
                    return console.log(err);
                }
            
                console.log("The file was saved!");
            }); 

            window.location.replace('batteryLevel.html')
          }
        });
       
  
      }