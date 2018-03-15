  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      
      db.collection("users").doc(user.uid)
      .onSnapshot(function(doc) {
          console.log("Current data: ", doc.data());

        var chargingStatusImage = document.getElementById('chargingStatusImage');
    
        if(doc.data()["Wi-Fi"] != '<unknown ssid>' && doc.data()["Wi-Fi"] != "0x"){
            document.getElementById('WiFiStatus').innerHTML = "WiFi Status: Connected - " + doc.data()["Wi-Fi"];
        }
        else{
            document.getElementById('WiFiStatus').innerHTML = "WiFi Status: Disconnected";
        }
  
        
      });
      
    } else {
      console.log('Error');
    }
  });