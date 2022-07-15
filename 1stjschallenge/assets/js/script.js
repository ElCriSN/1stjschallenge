//PASO 1
cantidad = document.querySelector('#cantidad');
color = document.querySelector('#color');
precio = document.querySelector('#precio');
//PASO 2 =)!!
preciototal = document.querySelector('#preciototal');
totalcantidad = document.querySelector('#totalcantidad');
colorfinal = document.querySelector('.circulocolor');
//PASO 3 =)!!
preciototal.innerHTML = Number(cantidad.value) * Number(precio.innerHTML);
totalcantidad.innerHTML = cantidad.value;
colorfinal.style.backgroundColor = color.value;