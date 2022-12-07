window.onload = setEventHandler;

function setEventHandler(){
    document.getElementById("submit").onclick = onSubmit;
}

function onSubmit(){
    let pass = document.getElementById("password").value;
    let pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{10,}$");
    if(pass.match(pattern)){
        alert("Form submitted!");
    }
    else{
        alert("Password field must be atleast 10 characters and must contain at least one number, one uppercase, and one lowercase letter.");
    }
}