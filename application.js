firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var starCountRef = firebase.database().ref('users/' + user.uid + "/");

    db.collection("users").doc(user.uid)
    .onSnapshot(function(doc) {
        console.log("Current data: ", doc.data());

   


      var chargingStatusImage = document.getElementById('chargingStatusImage');
  
     
      if(document.getElementById('batteryLevel') != null){
        document.getElementById('batteryLevel').innerHTML = "Battery Level: " + doc.data()["Battery level"] + "%";
        if(doc.data()["Is charging"] == true){
          if(doc.data()["AC charge"] == true){
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
        document.getElementById('batteryTemperature').innerHTML = "Battery Temperature: " + doc.data()["Battery temperature"].toFixed(2) + "&#8451;";
      }
     
      
    });
    
  } else {
    console.log('Error');
  }
});
 
