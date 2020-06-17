//variables
const iphone5sPrice = document.getElementById("iphone5s-price").innerText;
const iphone5sMinusBtn = document.getElementById("iphone5s-minus-btn");
const iphone5sPlusBtn = document.getElementById("iphone5s-plus-btn");
const iphone5sTotalPrice = document.getElementById("iphone5s-totalPrice");
const iphone5sUnit = document.getElementById("iphone5s-unit");
let totalPrice = document.getElementById("total-cost");
const tax = document.getElementById("tax").innerText;
const shippingCost = document.getElementById("shipping-cost").innerText;

//functions
function calculateIphonePrice() {
  const iphoneUnit = iphone5sUnit.value++;
  const iphoneNetPrice = parseFloat(iphone5sPrice);
  const iphoneTotalPrice = iphoneUnit * iphoneNetPrice + 300;
  iphone5sTotalPrice.innerHTML = iphoneTotalPrice;
  totalPrice.innerHTML = iphoneTotalPrice;
}
//eventlisteners
iphone5sPlusBtn.addEventListener("click", function (e) {
  calculateIphonePrice();
  e.preventDefault();
});
