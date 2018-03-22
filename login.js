function login(){

      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        if(error.message == 'The email adress is badly formatted.'){
          console.log('test');
        }
        console.log(errorMessage);
        if(errorMessage == 'The email address is badly formatted.'){
          document.getElementById('email').style.color = 'red';
          document.getElementById('email').value = '';
          document.getElementById('email').placeholder = 'Email not found.';
        }
        else if(errorMessage == 'The password is invalid or the user does not have a password.'){
          document.getElementById('password').value = '';
          document.getElementById('password').placeholder = 'Invalid password';
        }
      }
  );
  console.log(firebase.auth().currentUser.email)
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log('success');
   
    
    window.location.assign("batterylevel.html")
  } else {
    
  }
});