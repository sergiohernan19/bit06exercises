let lis = document.getElementById("btn1");
lis.addEventListener("click", saludar);

function saludar(e) {
  e.preventDefault();
  let nom = document.getElementById("nom1").value;
  let ed = document.getElementById("edad1").value;
  if (ed >= 18) {
    alert('bienvenido '+nom+' , usted es mayor de edad');
  } else {
    alert('bienvenido '+nom+' , usted es menor de edad');
  }
}
let resultado = 0;
//SUMA
//operación
resultado = Number(num1.value) + Number(num2.value);
//impresión en html
resOb.innerHTML = resultado;
//RESTA
//operación
resultado = Number(num1.value) - Number(num2.value);
//impresión en html
resOb.innerHTML = resultado;
//MULTIPLICACION
//operación
resultado = Number(num1.value) * Number(num2.value);
//impresión en html
resOb.innerHTML = resultado;