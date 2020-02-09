 // Get the Sidenav
var mySidenav = document.getElementById("mySidenav");

// Get the display_all
var display_all = document.getElementById("display_all");

// Get the DIV with overlay effect
var overlayBg = document.getElementById("myOverlay");

var mySidenavDiv =   document.getElementById("mySidenavDiv");

var solutions = document.getElementById("solutions");
// Toggle between showing and hiding the sidenav, and add overlay effect
function w3_open() {
    if (mySidenav.style.display === 'block') {
        mySidenav.style.display = 'none';
        overlayBg.style.display = "none";
        solutions.style.display = "none";
    } else {
        mySidenav.style.display = 'block';
        overlayBg.style.display = "block";
        solutions.style.display = "block";

    }
}

// Toggle between showing and hiding the sidenav, and add overlay effect

    
function artificial_intelligence_solutions(){
 

  if (mySidenavDiv.style.display === 'none') {
    mySidenav.style.display = 'block';
    overlayBg.style.display = "block";
    mySidenavDiv.style.display = 'block';
    solutions.style.display = "none";

} else {
  mySidenavDiv.style.display = 'none';
  solutions.style.display = "block";

}


}
// Close the sidenav with the close button
function w3_close() {
    mySidenav.style.display = "none";
    overlayBg.style.display = "none";
}
function display_All() {
  if (display_all.style.display === 'block') {
    display_all.style.display = 'none';
    } else {
      display_all.style.display = 'block';
    }
    
}

      
 

// Change style of top container on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("myTop").classList.add("w3-card-4");
      document.getElementById("myIntro").classList.add("w3-show-inline-block");
      document.getElementById("mySidenavDiv").style.display = 'none';
      document.getElementById("solutions").style.display = 'none';

  } else {

      document.getElementById("myIntro").classList.remove("w3-show-inline-block");
      document.getElementById("myTop").classList.remove("w3-card-4");
      document.getElementById("mySidenavDiv").style.display = 'block';
      document.getElementById("solutions").style.display = 'block';
    }

  if (document.getElementById("mySidenavDiv").style.display === 'none'){
    document.getElementById("solutions").style.display = 'block';
    } else {
     document.getElementById("solutions").style.display = 'none';

  }

}

// Accordions
function myAccordion(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
      x.previousElementSibling.className += " w3-theme";
  } else { 
      x.className = x.className.replace("w3-show", "");
      x.previousElementSibling.className = 
      x.previousElementSibling.className.replace(" w3-theme", "");
  }
}



  
function onfocus_validate_price_open_Data(){
    
    var price_open = document.getElementById("price_open").value;

    if (isNaN(price_open)) {

      document.getElementById("span_price_open").innerHTML = "Input must be a number";
      return false;
    }                

    document.getElementById("price_open").style.borderColor = "white";
    document.getElementById("span_price_open").innerHTML = "";


  }

  function onfocusout_validate_price_open_Data(){

    var price_open = document.getElementById("price_open").value;

      if (price_open ===null || price_open === "") {
        document.getElementById("price_open").style.borderColor = "red" ;
        document.getElementById("price_open").style.backgroundColor = "white";
        document.getElementById("span_price_open").innerHTML = "input must be filled out";
          return false;
       
      }
      else {
        document.getElementById("price_open").style.borderColor = "white";
        document.getElementById("span_price_open").innerHTML = "";

        
      }

  }

  function onfocus_validate_price_Data(){

var price = document.getElementById("price").value;

if (isNaN(price)) {

document.getElementById("span_price").innerHTML = "Input must be a number";
return false;
}                

document.getElementById("price").style.borderColor = "white";
document.getElementById("span_price").innerHTML = "";


}

function onfocusout_validate_price_Data(){

var price = document.getElementById("price").value;

if (price ===null || price === "") {
document.getElementById("price").style.borderColor = "red" ;
document.getElementById("price").style.backgroundColor = "white";
document.getElementById("span_price").innerHTML = "input number";
return false;

}
else {
document.getElementById("price").style.borderColor = "white";
document.getElementById("span_price").innerHTML = "";


}

}


function onfocus_validate_close_yesterday_Data(){

var close_yesterday = document.getElementById("close_yesterday").value;

if (isNaN(close_yesterday)) {

document.getElementById("span_close_yesterday").innerHTML = "Input number";
return false;
}                

document.getElementById("close_yesterday").style.borderColor = "white";
document.getElementById("span_close_yesterday").innerHTML = "";


}

function onfocusout_validate_close_yesterday_Data(){

var close_yesterday = document.getElementById("close_yesterday").value;

if (close_yesterday ===null || close_yesterday === "") {
document.getElementById("close_yesterday").style.borderColor = "red" ;
document.getElementById("close_yesterday").style.backgroundColor = "white";
document.getElementById("span_close_yesterday").innerHTML = "input number";
return false;

}
else {
document.getElementById("close_yesterday").style.borderColor = "white";
document.getElementById("span_close_yesterday").innerHTML = "";


}

}



function onfocus_validate_options_Data(){

var str = document.getElementById("options").value;
var res = str.toLocaleLowerCase();
document.getElementById("options").value = res;
document.getElementById("options").style.borderColor = "white";
document.getElementById("span_option").innerHTML = "";


}

function onfocusout_validate_options_Data(){

var options = document.getElementById("options").value;

if (options === "sell" || options === "hold" || options === "buy") {
document.getElementById("options").style.borderColor = "white";
document.getElementById("span_option").innerHTML = "";

}
else {
document.getElementById("options").style.borderColor = "red" ;
document.getElementById("options").style.backgroundColor = "white";
document.getElementById("span_option").innerHTML = "input must be sell / hold / buy";
return false;
}

}
function ai_options_validate_Data(){
var options = onfocusout_validate_options_Data();
var close_yesterday = onfocusout_validate_close_yesterday_Data();
var price = onfocusout_validate_price_Data();
var price_open = onfocusout_validate_price_open_Data();

if (options === false || close_yesterday === false || price === false || price_open === false) {

document.getElementById("check_ai_option").style.borderColor = "red" ;
document.getElementById("check_ai_option").style.backgroundColor = "brown";
document.getElementById("span_check_ai_option").innerHTML = "input valid data to get started";
return false;

}
else {
var ai_options = document.getElementById("span_check_ai_option").value;
document.getElementById("ai_options").innerHTML = ai_options;

document.getElementById("check_ai_option").style.borderColor = "white";


sendAjax();


document.getElementById("span_check_ai_option").innerHTML = "processing ai option";

ai_options = document.getElementById("span_check_ai_option").value;
document.getElementById("ai_options").innerHTML = ai_options;


}


}
function validate_url_Data() {
//var x = document.a["url_Data"]["url"].value;
var x = document.getElementById("url").value;
if (x == null || x == "") {
document.getElementById("url").style.borderColor = "red" ;
// alert("url must be filled out");
return false;
}
load_URL_data();
}


  
function verify_email_code(){

document.getElementById("forgot_login_password").style.display = "none";

document.getElementById("register").style.display = "none";

document.getElementById("login").style.display = "none";

document.getElementById("verify_email_code").style.display = "block";



}

function account(){

  var account = document.getElementById("account");
  var sidenav_account = document.getElementById("sidenav_account");

  var register = document.getElementById("register");
   var login = document.getElementById("login");

  if (account.style.display === 'block') {
  
    account.style.display = 'none';
    sidenav_account.style.display = 'block';

  } else {

    account.style.display = 'block';
    sidenav_account.style.display = 'none';
    login.style.display = 'none';
    register.style.display = 'none';

  }

}

function account_register(){
   
   var register = document.getElementById("register");
   var login = document.getElementById("login");

   if (register.style.display === 'none') {   
    
    document.getElementById("account").style.display = 'block';
    register.style.display = 'block';
    login.style.display = 'none';
    document.getElementById("forgot_login_password").style.display = "none";
    document.getElementById("verify_email_code").style.display = "none";
    document.getElementById("sidenav_account").style.display = "none";
    document.getElementById("span_account_login").style.display = "none";

   }
   else{

     //login.style.display = 'block';

     register.style.display = 'none';
     document.getElementById("span_account_login").style.display = "block";

   }

  }

function account_login(){

var register = document.getElementById("register");
var login = document.getElementById("login");


if (login.style.display === 'none') {

document.getElementById("account").style.display = 'block';
login.style.display = 'block';
register.style.display = 'none';
document.getElementById("forgot_login_password").style.display = "none";
document.getElementById("verify_email_code").style.display = "none";
document.getElementById("sidenav_account").style.display = "none";
document.getElementById("span_account_register").style.display = "none";


}
else{
 login.style.display = 'none';
 document.getElementById("span_account_register").style.display = "block";

}


}



    function onfocus_validate_verify_code_Data(){

      var verify_code = document.getElementById("verify_code").value;

      if (isNaN(verify_code)) {

        document.getElementById("verify_code").style.borderColor = "red" ;
        document.getElementById("span_verify_code").innerHTML = "Input 4 digit code";
        return false;
      }
      else{                

        document.getElementById("verify_code").style.borderColor = "white";
        document.getElementById("span_verify_code").innerHTML = "";
     
      }

    }

    function onfocusout_validate_verify_code_Data(){

      var verify_code = document.getElementById("verify_code").value;

        if (verify_code ===null || verify_code === "") {
          document.getElementById("verify_code").style.borderColor = "red" ;
          document.getElementById("verify_code").style.backgroundColor = "white";
          document.getElementById("span_verify_code").innerHTML = "Enter verification code";
            return false;
         
        }
        else if (isNaN(verify_code)) {

          document.getElementById("verify_code").style.borderColor = "red" ;
          document.getElementById("span_verify_code").innerHTML = "Input 4 digit code";
          return false;
        }
        else {
          document.getElementById("verify_code").style.borderColor = "white";
          document.getElementById("span_verify_code").innerHTML = "";




           send_ajax_verification_code();


          document.getElementById("span_login").innerHTML = "Verifying your account...";

          // send_ajax_verification_code(); will set innerHTML value 'successful verification ..' if successful verification

          //document.getElementById("span_verify_code").innerHTML = "successful verification";

              
          var span_verify_code = document.getElementById("span_verify_code").innerHTML;

        
          if (span_verify_code === "successful verification") {
  
         
            document.getElementById("span_login").innerHTML = "verification success..";

            document.getElementById("span_login").innerHTML = "Login success..";


            document.getElementById("verify_email_code").style.display = "none";


            login(); 

          
          } else {

             document.getElementById("span_verify_code").innerHTML = "Invalid verification";

          }


        }

    }
  
  function account_sign_in_validate_Data(){
    
    var login_email = onfocusout_validate_login_email_Data();
    var login_password = onfocusout_validate_login_password_Data();
    
    if (login_email === false && login_password === false) {
            document.getElementById("sign_in").style.borderColor = "red" ;
            document.getElementById("sign_in").style.backgroundColor = "white";

            document.getElementById("span_sign_in").innerHTML = "input email and password";
            return false;
    }
    else if (login_email === false) {
            document.getElementById("sign_in").style.borderColor = "red" ;
            document.getElementById("sign_in").style.backgroundColor = "white";
            //document.getElementById("span_login_email").innerHTML = "input valid email";

            document.getElementById("span_sign_in").innerHTML = "input valid email";
            return false;
    }
    else if (login_password === false) {
            document.getElementById("sign_in").style.borderColor = "red" ;
            document.getElementById("sign_in").style.backgroundColor = "white";
            //document.getElementById("span_login_password").innerHTML = "input valid email";

            document.getElementById("span_sign_in").innerHTML = "input password";
            return false;
    }   
    else{
      document.getElementById("login_email").style.borderColor = "white";
      document.getElementById("login_password").style.borderColor = "white";

      document.getElementById("span_sign_in").innerHTML = "Sign In";

      send_ajax_sign_in();


      document.getElementById("span_sign_in").innerHTML = "Processing...";

      document.getElementById("span_login").innerHTML = "Login in to your account...";
     
     // send_ajax_sign_up(); will set innerHTML value 'Login success ..' if successful login
     
     // document.getElementById("span_login").innerHTML = "Login success..";

      //document.getElementById("span_login").innerHTML = "Login not successful.";


      login(); 

    }


  }

  function login(){

    var span_login = document.getElementById("span_login").innerHTML;

      if (span_login === "Login success..") {
        
        success ();     

      } else {

        document.getElementById("login").style.display = "block";

        document.getElementById("span_sign_in").innerHTML = "Invalid username or password";
        document.getElementById("span_forgot_login_password_span_sign_in").innerHTML = "Forgot password?";
        
        document.getElementById("username_account_live").style.display = "none";

         span_login.style.display = 'block';
         document.getElementById("span_login").innerHTML = "Invalid username or password";
         document.getElementById("span_forgot_login_password_span_sign_in").style.display = "block";



      } 


  }



  function success (){

    document.getElementById("login").style.display = "none";
    document.getElementById("register").style.display = "none";
    document.getElementById("span_account_login").style.display = "none";
    document.getElementById("span_account_register").style.display = "none";

    


    document.getElementById("username_account_live").style.display = "block";

    var username_account_live = document.getElementById("username_account_live");
    var span_login = document.getElementById("span_login");

    if (username_account_live.style.display === 'block') {
     
     span_login.innerHTML = 'My Account';

    } else {

     span_login.style.display = 'block';

    }

  }
  

   
function onfocus_validate_login_password_Data(){

var str_login_password = document.getElementById("login_password").value;
document.getElementById("login_password").style.borderColor = "white";
document.getElementById("span_login_password").innerHTML = "";

document.getElementById("span_sign_in").innerHTML = "Sign In";


}

function onfocusout_validate_login_password_Data(){

var login_password= document.getElementById("login_password").value;

  if (login_password === null || login_password === "") {
    document.getElementById("login_password").style.borderColor = "red" ;
    document.getElementById("login_password").style.backgroundColor = "white";
      return false;

  }
  else {
    document.getElementById("login_password").style.borderColor = "white";
    document.getElementById("span_login_password").innerHTML = "";
   
  }

}
    
    function forgot_login_password(){

      document.getElementById("login").style.display = "none";

      document.getElementById("forgot_login_password").style.display = "block";



    }


      function onfocus_validate_forgot_login_password_email_Data(){

        var str_forgot_login_password_email = document.getElementById("forgot_login_password_email").value;
        var res_forgot_login_password_email = str_login_email.toLocaleLowerCase();
        document.getElementById("forgot_login_password_email").value = res_forgot_login_password_email;
        document.getElementById("forgot_login_password_email").style.borderColor = "white";
        document.getElementById("span_forgot_login_password_email").innerHTML = "";

        document.getElementById("span_forgot_login_password_sign_in").innerHTML = "Reset password";


      }

      function onfocusout_validate_forgot_login_password_email_Data(){

        var forgot_login_password_email = document.getElementById("forgot_login_password_email").value;
        
       const validateEmail = function(forgot_login_password_email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(forgot_login_password_email).toLowerCase());
  };

          if (forgot_login_password_email === null || forgot_login_password_email === "") {
            document.getElementById("forgot_login_password_email").style.borderColor = "red" ;
            document.getElementById("forgot_login_password_email").style.backgroundColor = "white";
              return false;

          }
           else if(validateEmail === false){
     document.getElementById("forgot_login_password_email").style.borderColor = "red" ;
    document.getElementById("forgot_login_password_email").style.backgroundColor = "white";
        document.getElementById("span_forgot_login_password_email").innerHTML = "Must be valid email. example@yourdomain.com";

      return false;
 
      
  }
          else {
            document.getElementById("forgot_login_password_email").style.borderColor = "white";
            document.getElementById("span_forgot_login_password_email").innerHTML = "";
           
          }

      }

  function onfocus_validate_forgot_login_password_Data(){

    var str_forgot_login_password = document.getElementById("login_password_forgot_login_password").value;
    var str_repeat_forgot_login_password = document.getElementById("repeat_login_password_forgot_login_password").value;

    
    document.getElementById("login_password_forgot_login_password").style.borderColor = "white";
    document.getElementById("span_forgot_login_password").innerHTML = "";

    document.getElementById("repeat_login_password_forgot_login_password").style.borderColor = "white";
    document.getElementById("span_repeat_forgot_login_password").innerHTML = "";


    document.getElementById("span_forgot_login_password_sign_in").innerHTML = "Reset password";


  }

  function onfocusout_validate_forgot_login_password_Data(){

    var forgot_login_password= document.getElementById("login_password_forgot_login_password").value;
    var repeat_forgot_login_password= document.getElementById("repeat_login_password_forgot_login_password").value;

      if (forgot_login_password === null || forgot_login_password === "") {
        document.getElementById("login_password_forgot_login_password").style.borderColor = "red" ;
        document.getElementById("login_password_forgot_login_password").style.backgroundColor = "white";
        document.getElementById("span_forgot_login_password_sign_in").innerHTML = "input new password";

          return false;

      }
      else if (repeat_forgot_login_password === null || repeat_forgot_login_password === "") {
        document.getElementById("repeat_login_password_forgot_login_password").style.borderColor = "red" ;
        document.getElementById("repeat_login_password_forgot_login_password").style.backgroundColor = "white";
        document.getElementById("span_forgot_login_password_sign_in").innerHTML = "repeat password";

          return false;

      }
      else if (repeat_forgot_login_password !== forgot_login_password ) {

        document.getElementById("login_password_forgot_login_password").style.borderColor = "red" ;
        document.getElementById("login_password_forgot_login_password").style.backgroundColor = "white";
        document.getElementById("span_forgot_login_password").innerHTML = "password do not match!";

        document.getElementById("repeat_login_password_forgot_login_password").style.borderColor = "red" ;
        document.getElementById("repeat_login_password_forgot_login_password").style.backgroundColor = "white";
        document.getElementById("span_repeat_forgot_login_password").innerHTML = "password do not match!";
          return false;

      }      
      else {
        document.getElementById("login_password_forgot_login_password").style.borderColor = "white";
        document.getElementById("repeat_login_password_forgot_login_password").style.borderColor = "white" ;

        document.getElementById("span_forgot_login_password").innerHTML = "";
        document.getElementById("span_repeat_forgot_login_password").innerHTML = "";

        document.getElementById("span_forgot_login_password_sign_in").innerHTML = "Reset password";


       
      }

  }
  
  function account_forgot_login_password_sign_in_validate_Data(){
    
    var forgot_login_password_email = onfocusout_validate_forgot_login_password_email_Data();
    var forgot_login_password = onfocusout_validate_forgot_login_password_Data();
    
    if (forgot_login_password_email === false && forgot_login_password === false) {
            document.getElementById("forgot_login_password_sign_in").style.borderColor = "red" ;
            document.getElementById("forgot_login_password_sign_in").style.backgroundColor = "white";

            document.getElementById("span_forgot_login_password_sign_in").innerHTML = "input email and new password";
            return false;
    }
    else if (forgot_login_password_email === false) {
            document.getElementById("forgot_login_password_sign_in").style.borderColor = "red" ;
            document.getElementById("forgot_login_password_sign_in").style.backgroundColor = "white";
            //document.getElementById("span_login_email").innerHTML = "input valid email";

            document.getElementById("span_forgot_login_password_sign_in").innerHTML = "input valid email";
            return false;
    }
    else if (forgot_login_password === false) {
            document.getElementById("forgot_login_password_sign_in").style.borderColor = "red" ;
            document.getElementById("forgot_login_password_sign_in").style.backgroundColor = "white";
            //document.getElementById("span_login_password").innerHTML = "input valid email";

            //document.getElementById("span_forgot_login_password_sign_in").innerHTML = "input password";
            return false;
    }   
    else{
      document.getElementById("forgot_login_password_email").style.borderColor = "white";
      document.getElementById("login_password_forgot_login_password").style.borderColor = "white";

      document.getElementById("span_forgot_login_password_sign_in").innerHTML = "Reset password";

      send_ajax_forgot_password();


      document.getElementById("span_forgot_login_password_sign_in").innerHTML = "Processing...";
     
     // send_ajax_forgot_password(); will send the 4 digit verification code ..' if successful valid email exist with the account else Invalid email or username
      
     // send_ajax_forgot_password(); will also set .innerHTML = "success";
     
     // document.getElementById("span_forgot_login_password_sign_in").innerHTML = "success";



      //document.getElementById("span_forgot_login_password_sign_in").innerHTML = "success..";


      var span_forgot_login_password_sign_in = document.getElementById("span_forgot_login_password_sign_in").innerHTML;

      if (span_forgot_login_password_sign_in === "success..") {

        verify_email_code();
        
        document.getElementById("span_login").innerHTML = "Verify code sent to your email...";
        
      }
      else{

        document.getElementById("span_forgot_login_password_sign_in").innerHTML = "Invalid email or username";

      }
     
     

    }


  }

  


function onfocus_validate_login_email_Data(){

var str_login_email = document.getElementById("login_email").value;
var res_login_email = str_login_email.toLocaleLowerCase();
document.getElementById("login_email").value = res_login_email;
document.getElementById("login_email").style.borderColor = "white";
document.getElementById("span_login_email").innerHTML = "";

document.getElementById("span_sign_in").innerHTML = "Sign In";


}



function onfocusout_validate_login_email_Data(){

var login_email = document.getElementById("login_email").value;

const validateEmail = function(login_email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(login_email).toLowerCase());
  };


  if (login_email === null || login_email === "") {
    document.getElementById("login_email").style.borderColor = "red" ;
    document.getElementById("login_email").style.backgroundColor = "white";
      return false;

  }
  else if(validateEmail === false){
     document.getElementById("login_email").style.borderColor = "red" ;
    document.getElementById("login_email").style.backgroundColor = "white";
        document.getElementById("span_login_email").innerHTML = "Must be valid email. example@yourdomain.com";

      return false;
 
      
  }
  else {
    document.getElementById("login_email").style.borderColor = "white";
    document.getElementById("span_login_email").innerHTML = "";
   
  }

}

function account_sign_up_validate_Data(){
        
        var login_email = onfocusout_validate_login_email_Data();
        var login_password = onfocusout_validate_login_password_Data();



        var register_first_name = onfocusout_validate_register_first_name_Data();
        var register_last_name = onfocusout_validate_register_last_name_Data();
        var register_email = onfocusout_validate_register_email_Data();
        var register_password = onfocusout_validate_register_password_Data();
        var register_repeat_password = onfocusout_validate_register_repeat_password_Data();


        
        if (register_first_name === false && register_last_name === false && register_email === false && register_password === false && register_repeat_password === false ) {
                document.getElementById("sign_up").style.borderColor = "red" ;
                document.getElementById("sign_up").style.backgroundColor = "white";
    
                document.getElementById("span_sign_up").innerHTML = "validate inputs";
                return false;
        }
        else if (register_first_name === false) {
                document.getElementById("sign_up").style.borderColor = "red" ;
                document.getElementById("sign_up").style.backgroundColor = "white";
                document.getElementById("span_login_email").innerHTML = "input first name";
    
                document.getElementById("span_sign_up").innerHTML = "input first name";
              return false;
        }
        else if (register_last_name === false) {
                document.getElementById("sign_up").style.borderColor = "red" ;
                document.getElementById("sign_up").style.backgroundColor = "white";
                document.getElementById("span_login_email").innerHTML = "input last name";
    
                document.getElementById("span_sign_up").innerHTML = "input last name";
              return false;
        }
        else if (register_email === false) {
                document.getElementById("sign_up").style.borderColor = "red" ;
                document.getElementById("sign_up").style.backgroundColor = "white";
                document.getElementById("span_login_email").innerHTML = "input email";
    
                document.getElementById("span_sign_up").innerHTML = "input email";
              return false;
        }       
        else if (register_password === false) {
                document.getElementById("sign_up").style.borderColor = "red" ;
                document.getElementById("sign_up").style.backgroundColor = "white";
                document.getElementById("span_login_email").innerHTML = "input password";
    
                document.getElementById("span_sign_up").innerHTML = "input password";
              return false;
        }
        else if (register_repeat_password === false) {
                document.getElementById("sign_up").style.borderColor = "red" ;
                document.getElementById("sign_up").style.backgroundColor = "white";
                document.getElementById("span_login_email").innerHTML = "password do not match!";
    
                document.getElementById("span_sign_up").innerHTML = "password do not match!";
              return false;
        }
        else {


          document.getElementById("span_sign_up").innerHTML = "Sign Up";

           send_ajax_sign_up();


          document.getElementById("span_sign_up").innerHTML = "Processing...";
     
          // send_ajax_sign_up(); will send the 4 digit verification code ..' if successful valid email 
      
          // send_ajax_sign_up(); will also set .innerHTML = "success";
     
          // document.getElementById("span_sign_up").innerHTML = "success";



         // document.getElementById("span_sign_up").innerHTML = "success..";


          var span_sign_up = document.getElementById("span_sign_up").innerHTML;

          if (span_sign_up === "success..") {

            verify_email_code();
        
            document.getElementById("span_login").innerHTML = "Verify code sent to your email...";
        
          }
          else{

            document.getElementById("span_sign_up").innerHTML = "Sign up not successful ";

          }

          

        }
      }

function onfocus_validate_register_repeat_password_Data(){

var str_register_repeat_password = document.getElementById("register_repeat_password").value;
document.getElementById("register_repeat_password").style.borderColor = "white";
document.getElementById("span_register_repeat_password").innerHTML = "";

document.getElementById("span_sign_up").innerHTML = "Sign Up";


}

function onfocusout_validate_register_repeat_password_Data(){

var register_repeat_password = document.getElementById("register_repeat_password").value;
var register_password = document.getElementById("register_password").value;

  if (register_repeat_password === null || register_repeat_password === "") {
    document.getElementById("register_repeat_password").style.borderColor = "red" ;
    document.getElementById("register_repeat_password").style.backgroundColor = "white";
    document.getElementById("span_sign_up").innerHTML = "Repeat Password";

    return false;

  }
  else if (register_password !== register_repeat_password) {
    document.getElementById("register_repeat_password").style.borderColor = "red" ;
    document.getElementById("register_repeat_password").style.backgroundColor = "white";
    
    document.getElementById("register_password").style.borderColor = "red" ;
    document.getElementById("register_password").style.backgroundColor = "white";
    
    document.getElementById("span_sign_up").innerHTML = "Password do not match!";

    return false;

  }
  else {
    document.getElementById("register_repeat_password").style.borderColor = "white";
    document.getElementById("span_register_repeat_password").innerHTML = "";
    document.getElementById("span_sign_up").innerHTML = "Sign Up";
  }

}

function onfocus_validate_register_password_Data(){

var str_register_password = document.getElementById("register_password").value;
document.getElementById("register_password").style.borderColor = "white";
document.getElementById("span_register_password").innerHTML = "";

document.getElementById("span_sign_up").innerHTML = "Sign Up";


}

function onfocusout_validate_register_password_Data(){

var register_password = document.getElementById("register_password").value;

  if (register_password === null || register_password === "") {
    document.getElementById("register_password").style.borderColor = "red" ;
    document.getElementById("register_password").style.backgroundColor = "white";
    document.getElementById("span_sign_up").innerHTML = "Input Password";

    return false;

  }
  else {
    document.getElementById("register_password").style.borderColor = "white";
    document.getElementById("span_register_password").innerHTML = "";
    document.getElementById("span_sign_up").innerHTML = "Sign Up";
  }

}

function onfocus_validate_register_email_Data(){

var str_register_email = document.getElementById("register_email").value;
var res_register_email = str_register_email.toLocaleLowerCase();
document.getElementById("register_email").value = res_register_email;
document.getElementById("register_email").style.borderColor = "white";
document.getElementById("span_register_email").innerHTML = "";

document.getElementById("span_sign_up").innerHTML = "Sign Up";


}

function onfocusout_validate_register_email_Data(){

var register_email = document.getElementById("register_email").value;
 const validateEmail = function(register_email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(register_email).toLowerCase());
  };

  if (register_email === null || register_email === "") {
    document.getElementById("register_email").style.borderColor = "red" ;
    document.getElementById("register_email").style.backgroundColor = "white";
    document.getElementById("span_sign_up").innerHTML = "Input Email";

    return false;

  }
  else if(validateEmail === false){
     document.getElementById("register_email").style.borderColor = "red" ;
    document.getElementById("register_email").style.backgroundColor = "white";
    document.getElementById("span_sign_up").innerHTML = "Must be valid email. example@yourdomain.com";

    return false;

  }
  else {
    document.getElementById("register_email").style.borderColor = "white";
    document.getElementById("span_register_email").innerHTML = "";
    document.getElementById("span_sign_up").innerHTML = "Sign Up";

  }

}

function onfocus_validate_register_last_name_Data(){

var str_register_last_name = document.getElementById("register_last_name").value;
var res_register_last_name = str_register_last_name.toLocaleLowerCase();
document.getElementById("register_last_name").value = res_register_last_name;
document.getElementById("register_last_name").style.borderColor = "white";
document.getElementById("span_register_last_name").innerHTML = "";

document.getElementById("span_sign_up").innerHTML = "Sign Up";


}

function onfocusout_validate_register_last_name_Data(){

var register_last_name = document.getElementById("register_last_name").value;

  if (register_last_name === null || register_last_name === "") {
    document.getElementById("register_last_name").style.borderColor = "red" ;
    document.getElementById("register_last_name").style.backgroundColor = "white";
    document.getElementById("span_sign_up").innerHTML = "Input Last Name";

    return false;

  }
  else {
    document.getElementById("register_last_name").style.borderColor = "white";
    document.getElementById("span_register_last_name").innerHTML = "";
    document.getElementById("span_sign_up").innerHTML = "Sign Up";

  }

}

function onfocus_validate_register_first_name_Data(){

var str_register_first_name = document.getElementById("register_first_name").value;
var res_register_first_name = str_register_first_name.toLocaleLowerCase();
document.getElementById("register_first_name").value = res_register_first_name;
document.getElementById("register_first_name").style.borderColor = "white";
document.getElementById("span_register_first_name").innerHTML = "";

document.getElementById("span_sign_up").innerHTML = "Sign Up";


}

function onfocusout_validate_register_first_name_Data(){

var register_first_name = document.getElementById("register_first_name").value;

  if (register_first_name === null || register_first_name === "") {
    document.getElementById("register_first_name").style.borderColor = "red" ;
    document.getElementById("register_first_name").style.backgroundColor = "white";
    document.getElementById("span_sign_up").innerHTML = "Input Last Name";

    return false;

  }
  else {
    document.getElementById("register_first_name").style.borderColor = "white";
    document.getElementById("span_register_first_name").innerHTML = "";
    document.getElementById("span_sign_up").innerHTML = "Sign Up";

  }

}

function arithmetic(){

  percent_change_since_open_arithmetic();
  percent_change_from_day_low_arithmetic();
  percent_change_from_day_high_arithmetic();


}




function percent_change_since_open_arithmetic(){
  
      
      
  var percent_change_since_open = 0;

  var price = $('#price').val();
  var price_open = $('#price_open').val();

  var change_since_open = price - price_open;

   percent_change_since_open = (change_since_open / price) * 100;


  var elem_percent_change_since_open = document.getElementById("myBar_percent_change_since_open");
  var width_percent_change_since_open = 10;
  
    if (percent_change_since_open < 0){
      document.getElementById("myBar_percent_change_since_open").style.backgroundColor = "red";

        }
        else{
          document.getElementById("myBar_percent_change_since_open").style.backgroundColor = "green";

       }
    
    
      width_percent_change_since_open = percent_change_since_open; 
      elem_percent_change_since_open.style.width = width_percent_change_since_open + '%';

      document.getElementById("label_percent_change_since_open").innerHTML = width_percent_change_since_open * 1  + '%';
    
  }

 














function percent_change_from_day_low_arithmetic(){
  
      
      
  var percent_change_from_day_low = 0;

  var price = $('#price').val();
  var day_low = $('#day_low').val();

  var change_from_day_low = price - day_low;

  
  percent_change_from_day_low = (change_from_day_low / price) * 100;


  var elem_percent_change_from_day_low = document.getElementById("myBar_percent_change_from_day_low");   
  var width_percent_change_from_day_low = 10;
  
    if (percent_change_from_day_low < 0){
      document.getElementById("myBar_percent_change_from_day_low").style.backgroundColor = "red";

        }
        else{
          document.getElementById("myBar_percent_change_from_day_low").style.backgroundColor = "green";

       }
    
      width_percent_change_from_day_low = percent_change_from_day_low; 
      elem_percent_change_from_day_low.style.width = width_percent_change_from_day_low + '%'; 

      document.getElementById("label_percent_change_from_day_low").innerHTML = width_percent_change_from_day_low * 1  + '%';
    
  }
  
  












    
  
  
    function percent_change_from_day_high_arithmetic(){
  
      
      
      var percent_change_from_day_high =0;
  
      var price = $('#price').val();
      var day_high = $('#day_high').val();
  
      var change_from_day_high = price - day_high;
  
      
  
  
      percent_change_from_day_high = (change_from_day_high / price) * 100;
  
      var elem_percent_change_from_day_high= document.getElementById("myBar_percent_change_from_day_high");   
      var width_percent_change_from_day_high = 10;
     
        if (percent_change_from_day_high < 0){
          document.getElementById("myBar_percent_change_from_day_high").style.backgroundColor = "red";

        }
        else{
          document.getElementById("myBar_percent_change_from_day_high").style.backgroundColor = "green";

        }
        
          width_percent_change_from_day_high = percent_change_from_day_high; 
          elem_percent_change_from_day_high.style.width = width_percent_change_from_day_high + '%'; 

          document.getElementById("label_percent_change_from_day_high").innerHTML = width_percent_change_from_day_high   + '%';
        
      }
      
      
      
  