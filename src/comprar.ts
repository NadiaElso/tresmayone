function verCompras(): void {
  console.log("hola");
}

let comprar = document.getElementById("botonComprar") as HTMLButtonElement;
comprar?.addEventListener("click", verCompras);
