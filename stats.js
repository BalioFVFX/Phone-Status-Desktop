  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      
      db.collection("users").doc(user.uid)
      .onSnapshot(function(doc) {
          console.log("Current data: ", doc.data());

        var chargingStatusImage = document.getElementById('chargingStatusImage');
    
        if(doc.data()["Wi-Fi"] != '<unknown ssid>'){
            document.getElementById('WiFiStatus').innerHTML = "Status: Connected - " + doc.data()["Wi-Fi"];
        }
        else{
            document.getElementById('WiFiStatus').innerHTML = "Status: Disconnected";
        }
  
        
      });
      
    } else {
      console.log('Error');
    }
  });