window.onload = function(){
  firebase.auth().signOut().then(function() {
    console.log('success');
    window.location.assign("login.html")
  }).catch(function(error) {
    // An error happened.
  });
}
  


   
