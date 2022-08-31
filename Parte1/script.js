function switchlike(elemento) {
    count = document.querySelector("#like");
    valor = parseInt(count.innerHTML);
    valor = valor + 1;
    count.innerHTML = valor;
}
