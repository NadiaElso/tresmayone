"use strict";

const payamountbtn = document.querySelector("#pay-amount");
const decrementbtn = document.querySelectorAll("#decrement");
const quantityelement = document.querySelectorAll("#quantity");
const incrementbtn = document.querySelectorAll("#increment");
const priceelement = document.querySelectorAll("#price");
const subtotalelement = document.querySelector("#subtotal");
const taxelement = document.querySelector("#tax");
const totalelement = document.querySelector("#total");

for (let index = 0; index < incrementbtn.length; index++) {
  incrementbtn[index].addEventListener("click", function () {
    let increment = Number(this.previousElementSibling.textcontent);
    increment++;
    this.previousElementSibling.textcontent = increment;
    totalcalc();
  });
  decrementbtn.addEventListener("click", function () {
    let decrement = Number(this.nextElementSibling.textcontent);
    decrement <= 1 ? 1 : decrement--;
    this.nextElementSibling = decrement;
    totalcalc();
  });
}

const totalcalc = function () {
  const tax = 0.05;
  let subtotal = 0;
  let totaltax = 0;
  let total = 0;
  for (let index = 0; index < quantityelement.length; index++) {
    subtotal +=
      Number(quantityelement[index].textContent) *
      Number(priceelement[index].textContent);
  }
  subtotalelement.textContent = subtotal.toFixed(2);
  totaltax = subtotal * tax;
  taxelement.textContent = totaltax.toFixed(2);
  total = subtotal + totaltax;
  totalelement.textContent = total.toFixed(2);
  payamountbtn.textContent = total.toFixed(2);
};
