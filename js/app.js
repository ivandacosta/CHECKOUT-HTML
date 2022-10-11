const incrementar = document.getElementById("increment");
const decrementar = document.getElementById("decrement");

const value = document.getElementById("valor");

let number = 0;

incrementar.addEventListener("click", () => {
  value.innerHTML = number++;
});

decrementar.addEventListener("click", () => {
  value.innerHTML = number--;
});

console.log(value);
