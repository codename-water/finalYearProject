 function validate() {
	 		   if (document.myForm.name.value == "" ) {
                  alert( "Please provide your name!" );
                  document.myForm.name.focus() ;
                  return false;
               }
               if( document.myForm.email.value == "" ) {
                  alert( "Please provide your Email!" );
                  document.myForm.email.focus() ;
                  return false;
               }
               if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.email.value) == false){
                  alert("You have entered an invalid email address!");
                  return (false);
               }
               if( document.myForm.password.value == "" ) {
                  alert( "Please provide your password!" );
                  document.myForm.password.focus() ;
                  return false;
               }
               if( document.myForm.passwordcheck.value != document.myForm.password.value ) {
                  alert( "Passwords don't match!" );
                  document.myForm.password.focus() ;
                  return false;
               }

               return( true );
}