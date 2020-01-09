/**
 * I have used jquery to develope the code
 * why jquery ? event handling and dom(Document object model model) manipulation becomes easier
 * $(document).ready and documnet.on("ready",call back) both are same
 */

$(document).ready(function () {
    /**
     * This is for login purpose
     */
    $('#submitlogin').submit(function (e) {
      e.preventDefault();
      var email = $("#email_field").val();
      var password = $("#password_field").val();
    //   console.log(email,password)
      if(email == "user@gmail.com" && password == "123456"){
        window.location.replace("./index.html")
      }else {
          alert("Please enter valid credentails")
      }
    });
  });