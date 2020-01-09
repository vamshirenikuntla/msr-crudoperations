/**
 * I have used jquery to develope the code
 * why jquery ? event handling and dom(Document object model model) manipulation becomes easier
 * $(document).ready and documnet.on("ready",call back) both are same
 */


 
$(document).ready(function () {
    $("#entry_handler").submit(function (e){
        try {
            e.preventDefault()                     
            let data = JSON.parse(window.localStorage.getItem("studentData"))
            if(!data){
                window.localStorage.setItem("studentData",[])
                data = []
            }
            var id = $("#student_id").val();
            var name = $("#student_name").val();
            var email = $("#s_email").val();
            var clas = $("#s_class").val();
            var year = $("#enroll_year").val();
            var city = $("#city").val();
            var country = $("#country").val();
            console.log(id)
            const obj = {id,name,email,clas,year,city,country}
            console.log(data)
            if(data.find((ele) => ele.id == id)){
                throw new Error("Id already existed")
            }else{
                window.localStorage.setItem("studentData",JSON.stringify([...data,obj]))
            }
            var foo = [];
            $('#student_table tr:last').after(`<tr><td>${id}</td><td>${name}</td><td>${email}</td><td>${clas}</td><td>${year}</td><td>${city}</td>><td>${country}</td><td><button>Edit</button></td><td><button>Delete</button></td></tr>`);

        } catch (error) {
            alert(error.message)
            e.preventDefault()            
        }
    })
  });