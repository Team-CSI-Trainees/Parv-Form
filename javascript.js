
function green(var1,var2){
    document.getElementById(var1).style.border=" none ";
    document.getElementById(var2).style.display="none";
}
function validationf() {
    var name = document.forms.regform.Name.value;
    var email = document.forms.regform.EMail.value;
    var MobileNumber = document.forms.regform.MobileNumber.value;
    var password1 = document.forms.regform.Password1.value;
    var password2 = document.forms.regform.Password2.value;
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    var regPhone=/^\d{10}$/;                                       
    var regName = /^[a-zA-Z ]+$/; 
    var regpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;
    var error=false;
    if (name == "" || !regName.test(name)) {
        document.getElementById("Name").style.border= "2px solid rgb(138,0,0)";
        document.getElementById("nameerror").style.display="block";
        error=true;
    }
                 
    if (email == "" || !regEmail.test(email)) {
        document.getElementById("Email").style.border= "2px solid rgb(138,0,0)";
        document.getElementById("emailerror").style.display="block";
        error=true;
    }
                  
     if (password1 == " " || !regpass.test(password1) ) {
        document.getElementById("Password1").style.border= "2px solid rgb(138,0,0)";
        document.getElementById("pass1error").style.display="block";
        error=true;
    }
 
     if(password1!=password2){
        document.getElementById("Password2").style.border= "2px solid rgb(138,0,0)";
        error=true;
        document.getElementById("pass2error").style.display="block";
    }
     if (MobileNumber == "" || !regPhone.test(MobileNumber)) {
        document.getElementById("MobileNumber").style.border= "2px solid rgb(138,0,0)";
        error=true;
        document.getElementById("moberror").style.display="block";
    }
     if(!document.forms.regform.Gender.value){
        document.getElementById("generror").style.display="block";
        error=true;
    }
    if(!error){
    alert("Form Submitted Succesfully");
    console.log("Name-",name,"email-",email,"Mobile No.-",MobileNumber);    
    return true;
    }
    else{
        return false;
    }
}
