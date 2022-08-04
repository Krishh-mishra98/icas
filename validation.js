
function validate(){
  var valid_email = document.forms["basic-form"]["email"].value;
  var valid_location = document.forms["basic-form"]["location"].value;
  var valid_name = document.forms["basic-form"]["name"].value;
  var valid_city = document.forms["basic-form"]["city"].value;
  var valid_address = document.forms["basic-form"]["address"].value; 
  var valid_gender = document.forms["basic-form"]["optradio"].value; 
  var valid_dob = document.forms["basic-form"]["dob"].value; 
  var valid_nationality = document.forms["basic-form"]["nationality"].value; 
  var valid_basic = document.forms["basic-form"]["basic"].value; 
  var valid_post = document.forms["basic-form"]["post"].value; 
  var valid_file = document.forms["basic-form"]["file"].value; 
  if(valid_email==""){
    alert("Email can't be blank"); 
    return false;
  }
  else if(valid_location==""){
    alert("Location can't be blank"); 
    return false;
  }
  else if(valid_name==""){
    alert("Name can't be blank"); 
    return false;
  }
  else if(valid_city=="" ){
    alert("City can't be blank"); 
    return false;
  }
  else if(valid_address == ""){
    alert("Address can't be blank"); 
    return false;
  }
  else if(valid_gender==""){
    alert("Enter gender !"); 
    return false;
  }
  else if(valid_dob==""){
    alert("DOB can't be blank"); 
    return false;
  } 
  else if(valid_nationality==""){
    alert("Nationality can't be blank"); 
    return false;   
  }
  else if(valid_basic==""){
    alert("Basic Education can't be blank"); 
    return false;
  }
  else if(valid_post==""){
     alert("Post Education can't be blank"); 
     return false;
  }
  else if(valid_file==""){
      alert("Select a file"); 
      return false;
  }
  return true;
  
}

    function returnValues(){
      var Name = document.getElementById("name").value;
      localStorage.setItem("Set_Name", Name);

      var Location = document.getElementById("location").value;
      localStorage.setItem("Set_Location", Location);

      var Address = document.getElementById("address").value;
      localStorage.setItem("Set_Address", Address);

      

      var City = document.getElementById("city").value;
      localStorage.setItem("Set_City", City);

      var Email = document.getElementById("email").value;
      localStorage.setItem("Set_Email", Email);

      

      var DOB = document.getElementById("dob").value;
      localStorage.setItem("Set_DOB", DOB);

    //   var Nationality = document.getElementById("nationality").value;
    //   localStorage.setItem("Set_Nationality", Nationality);

      var Basic = document.getElementById("basic").value;
      localStorage.setItem("Set_Basic", Basic);

      var Post = document.getElementById("post").value;
      localStorage.setItem("Set_Post", Post);

      var File = document.getElementById("file").value;
      localStorage.setItem("Set_File", File);


    //   var Gender = document.getElementByName("optradio").value;
    //   localStorage.setItem("Set_Gender", Gender);


      localStorage.setItem("Status", "true");
      window.location.href="homepage.html";
      return false;
    //   return false;



  }


      //to get item
    //   <script>
        
    //     document.getElementById("New_Email").innerHTML = localStorage.getItem("Set_Email");
    //     document.getElementById("New_Location").innerHTML = localStorage.getItem("Set_Location");
    //     document.getElementById("New_Address").innerHTML = localStorage.getItem("Set_Address");
    //     document.getElementById("New_City").innerHTML = localStorage.getItem("Set_City");
    //     document.getElementById("New_Name").innerHTML = localStorage.getItem("Set_Name");
    //     document.getElementById("New_DOB").innerHTML = localStorage.getItem("Set_DOB");
    //     document.getElementById("New_Nationality").innerHTML = localStorage.getItem("Set_Nationality");
    //     document.getElementById("New_Basic").innerHTML = localStorage.getItem("Set_Basic");
    //     document.getElementById("New_Post").innerHTML = localStorage.getItem("Set_Post");
    //     document.getElementById("New_File").innerHTML = localStorage.getItem("Set_File");
    //     document.getElementById("New_Gender").innerHTML = localStorage.getItem("Set_Gender");

    // </script>