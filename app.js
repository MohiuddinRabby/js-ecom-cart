//variables
const iphone5sPrice = document.getElementById("iphone5s-price").innerText;
const iphone5sMinusBtn = document.getElementById("iphone5s-minus-btn");
const iphone5sPlusBtn = document.getElementById("iphone5s-plus-btn");
let iphone5sTotalPrice = document.getElementById("iphone5s-totalPrice")
const iphone5sUnit = document.getElementById("iphone5s-unit");
let totalPrice = document.getElementById('total-cost');
//functions

//eventlisteners
iphone5sPlusBtn.addEventListener("click", function (e) {
  e.preventDefault();
});
