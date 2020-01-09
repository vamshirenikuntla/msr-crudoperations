/**
 * I have used jquery to develope the code
 * why jquery ? event handling and dom(Document object model model) manipulation becomes easier
 * $(document).ready and documnet.on("ready",call back) both are same
 */

$(document).ready(function () {
    /**
     * This is for registering purpose
     */
    $("#registerform").submit(function (e){
        e.preventDefault()
        try {
            var password = $("#password").val();
            var confirmPassword = $("#confim_password").val();
            console.log(password,confirmPassword)
            if(password != confirmPassword){
                throw new Error("Please enter valid password and confirm password")
            }
            window.location.replace("./index.html")
        } catch (error)     {
            alert(error.message)             
        }
    }) 
  });