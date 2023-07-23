/*
 Author: Diego Adrian<adry.dabp@gmail.com>
 Final Test: Bases de javascript
 Date: 23/11/2022
 University: USIP
*/

console.log("Aqui ira todo tu codigo...EXITOS !!!");

//Value of 1 Dollar in different currencies
var valores = {
  10: 6.85,   // Bolivianos
  20: 823.72, // Pesos Chilenos
  30: 16.97,  // Pesos Mexicanos
  40: 269.40, // Pesos argentinos
  50: 1       // Dolares
}

//Currency
var monedas = {
  10: "Bolivianos",
  20: "Pesos Chilenos",
  30: "Pesos Mexicanos",
  40: "Pesos Argentinos",
  50: "Dolares"
}

const btn = document.getElementById('calcular');
btn.addEventListener('click', () => {
  //Pull the Values
  var cantidad = parseFloat(document.getElementById('monto').value);
  var divisa_origen = parseInt(document.getElementById('de').value);
  var divisa_destino = parseInt(document.getElementById('a').value);

  //Currency Exchange
  var cambio = 0;
  if (valores[divisa_origen] && valores[divisa_destino]) {
    cambio = (cantidad / valores[divisa_origen]) * valores[divisa_destino];
  }
  document.getElementById('respuesta').innerHTML = Number(cambio.toFixed(2)).toLocaleString('es-ES');
 //document.getElementById('respuesta').innerHTML = cambio.toFixed(2);
  document.getElementById('moneda').innerHTML = monedas[divisa_destino];
});