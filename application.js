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
    var chargingStatusImage = document.getElementById('chargingStatusImage');

   
    if(document.getElementById('batteryLevel') != null){
      document.getElementById('batteryLevel').innerHTML = "Battery Level: " + snapshot.val().batterystatus.level + "%";
      if(snapshot.val().batterystatus.isCharging == true){
        if(snapshot.val().batterystatus.acCharge == true){
            document.getElementById('isCharging').innerHTML = "Battery Status: Charging - Ac Charger"
            document.getElementById('chargingStatusImage').src = "plug.png";
            chargingStatusImage.style.width = '35px';
            chargingStatusImage.style.height = '35px';
            chargingStatusImage.style.left = '5px';

        }
        else{
          document.getElementById('isCharging').innerHTML = "Battery Status: Charging - USB"
          document.getElementById('chargingStatusImage').src = "usb.png";
          chargingStatusImage.style.width = '35px';
          chargingStatusImage.style.height = '35px';
          chargingStatusImage.style.left = '46px';
        }
      }
      else{
          document.getElementById('isCharging').innerHTML = "Battery Status: Discharging"
          document.getElementById('chargingStatusImage').src = "//:0";
          chargingStatusImage.style.width = '0px';
          chargingStatusImage.style.height = '0px';
      }
    }
   
   
    else if(document.getElementById('batteryTemperature') != null){
      document.getElementById('batteryTemperature').innerHTML = "Battery Temperature: " + snapshot.val().batterystatus.temperature + "&#8451;";
    }
   
    
  });
