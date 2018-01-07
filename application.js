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


  var starCountRef = firebase.database().ref('users/' + currentUsername + "/");
  starCountRef.on('value', function(snapshot) {
    if(document.getElementById('batteryLevel') != null){
      document.getElementById('batteryLevel').innerHTML = "Battery Level: " + snapshot.val().batterystatus.level + "%";
    }
    else if(document.getElementById('batteryTemperature') != null){
      document.getElementById('batteryTemperature').innerHTML = "Battery Temperature: " + snapshot.val().batterystatus.temperature + "&#8451;";
    }
   
    
  });
