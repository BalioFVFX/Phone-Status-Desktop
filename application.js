let lowBattery = false;
let lowBatteryUpdate = false;
var audio = new Audio('lowbattery.wav');
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

    db.collection("users").doc(user.uid).collection("level").doc("l")
    .onSnapshot(function(doc) {

      document.getElementById('batteryLevel').innerHTML = "Battery Level: " + doc.data()['Battery level'].toFixed(0) + "%";

      if(doc.data()['Battery level'].toFixed(0) <= 15 && doc.data()['Is charging'] == false){
        console.log('low battery');


        if(doc.data()['Battery level'].toFixed(0) == 15 && doc.data()['Is charging'] == false){
          audio.play();
        }
      
        document.getElementById('batteryLevel').style.color = '#ff0000';
      }

      else{

        document.getElementById('batteryLevel').style.color = '#02e809';
      
      }
     
      if(doc.data()['Is charging'] == true){
        document.getElementById('isCharging').style.color = '#ffffff';
      }
      else{
        document.getElementById('isCharging').style.color = '#fc008e';
      }
      
    });

    db.collection("users").doc(user.uid)
    .onSnapshot(function(doc) {
        console.log("Current data: ", doc.data());

       
        
      var chargingStatusImage = document.getElementById('chargingStatusImage');

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
      
      
    });
    
  } else {
    console.log('Error');
  }
});
 
