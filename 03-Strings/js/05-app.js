const producto = 'Monitor 20 Pulgadas';

//Replace
console.log(producto);
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', ' Monitor Curvo'));
const products = ["Monitor InStock", "Mouse InStock", "Teclado InStock", "PC InStock"];
products.map(producto => console.log(producto.replace('InStock', 'Vendido')));

//.slice
console.log(producto.slice(0,10));
console.log(producto.slice(8));
console.log(producto.slice(2,1));

// Alternativa a slice
console.log((producto.substring(0,10)));
console.log((producto.substring(2,1)));

const usuario = "Juan";
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));