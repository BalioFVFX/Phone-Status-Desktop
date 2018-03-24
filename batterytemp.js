firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

    db.collection("users").doc(user.uid)
    .onSnapshot(function(doc) {
        document.getElementById("batteryTemperature").innerHTML = " Battery Temperature: " + doc.data()["Battery temperature"].toFixed(2) + "&#x2103;"
    });
    
  } else {
    console.log('Error');
  }
});
 
