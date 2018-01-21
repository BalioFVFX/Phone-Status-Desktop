function login(){

      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      }
  );
  console.log(firebase.auth().currentUser.email)
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log('success');
   
    
    window.location.assign("batterylevel.html")
  } else {
    console.log('Error');
  }
});