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



  document.getElementById('batteryLevel').innerHTML = "Battery Level: test";

  var starCountRef = firebase.database().ref('battery/level/');
  starCountRef.on('value', function(snapshot) {
    document.getElementById('batteryLevel').innerHTML = "Battery Level: " + snapshot.val().level;
    console.log(123);
  });

  function readData(){
    database.ref('battery/level/').once('value').then(function(snapshot){
        document.getElementById('batteryLevel').innerHTML = "Battery Level: " + snapshot.val().level;
    })
  }