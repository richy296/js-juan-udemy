const producto = "Monitor 20 Pulgadas";

// .repeat te va a permitir repetir una cadena de texto...
const texto = ' en Promoción'.repeat(2);

console.log(texto);
console.log(`${producto} ${texto} !!!`);

// Split, dividir un string

const actividad = 'estoy aprendiendo javaScript moderno'
console.log(actividad.split(' '));

const hobbies = 'leer, caminar, escuchar musica, escribir, aprender a programar'
console.log(hobbies.split(', ')); 

const tweet = "Aprendiendo Javascript #JSModerno";
console.log(tweet.split('#'));