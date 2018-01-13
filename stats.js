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


  var starCountRef = firebase.database().ref('users/' + currentUsername + "/" + 'networkstatus');
  starCountRef.on('value', function(snapshot) {
    
    if(snapshot.val().wifiName != '<unknown ssid>'){
        document.getElementById('WiFiStatus').innerHTML = "Status: Connected - " + snapshot.val().wifiName;
    }
    else{
        document.getElementById('WiFiStatus').innerHTML = "Status: Disconnected";
    }
    
  
  });
