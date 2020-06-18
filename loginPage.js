 function validate() {
               if( document.myForm.email.value == "" ) {
                  alert( "Please provide your Email!" );
                  document.myForm.EMail.focus() ;
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

               return( true );
}