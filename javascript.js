
function validationf() {
    var name = document.forms.regform.Name.value;
    var email = document.forms.regform.EMail.value;
    var MobileNumber = document.forms.regform.MobileNumber.value;
    var password1 = document.forms.regform.Password1.value;
    var password2 = document.forms.regform.Password2.value;
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    var regPhone=/^\d{10}$/;                                       
    var regName = /^[a-zA-Z ]+$/; 
    var regpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    
    if (name == !regName.test(name)) {
        alert("Please enter your name properly.");
        return false;
    }
                 
    if (email == "" || !regEmail.test(email)) {
        alert("Please enter a valid e-mail address.");
        return false;
    }
                  
    if (password1 == " " || !regpass.test(password1) ) {
        alert("Please enter your password in correct format");
        return false;
    }
 
    if(password1!=password2){
        alert("Password and Confirm Password must be same");
        return false;
    }
     if (MobileNumber == "" || !regPhone.test(MobileNumber)) {
        alert("Please enter valid phone number.");
        return false;
    }
    if(!document.forms.regform.Gender.value){
        alert("Select gender first");
        return false;  
    }
    alert("Form Submitted Succesfully");
    console.log("Name-",name,"email-",email,"Mobile No.-",MobileNumber,"Password-",password1);          
    return true;
}
