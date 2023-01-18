function login(){
var user, password

user = document.getElementById("usuario").value;
password = document.getElementById("contrasena").value;

if( user == "bit" && password == "2023"){
window.location = "index2.html"
}
 else{
    alert("Datos Incorrectos")  
}
}

    