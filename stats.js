  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var starCountRef = firebase.database().ref('users/' + user.uid + "/networkstatus");
      starCountRef.on('value', function(snapshot) {
        var chargingStatusImage = document.getElementById('chargingStatusImage');
    
        if(snapshot.val().wifiName != '<unknown ssid>'){
            document.getElementById('WiFiStatus').innerHTML = "Status: Connected - " + snapshot.val().wifiName;
        }
        else{
            document.getElementById('WiFiStatus').innerHTML = "Status: Disconnected";
        }
  
        
      });
      
    } else {
      console.log('Error');
    }
  });