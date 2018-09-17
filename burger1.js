var spicyBurger = {
  name: "Spicy Burger",
  meat: "Beef",
  sauce: "Barbeque Sauce",
  veg: "Jalapeno, Tomato, pickles",
  price: 10.00
};

var mildBurger = {
  name: "Burger",
  meat: "Beef",
  sauce: "ketchup",
  veg: "Lettuce, Tomato, pickles",
  price: 10.00
};

function spicy() {
  document.getElementById('spicyname').innerHTML=spicyBurger.name;
  document.getElementById('spicymeat').innerHTML=spicyBurger.meat;
  document.getElementById('spicysauce').innerHTML=spicyBurger.sauce;
  document.getElementById('spicyveg').innerHTML=spicyBurger.veg;
  document.getElementById('spicyprice').innerHTML=spicyBurger.price;
  document.getElementById('mildname').innerHTML=mildBurger.name;
  document.getElementById('mildmeat').innerHTML=mildBurger.meat;
  document.getElementById('mildsauce').innerHTML=mildBurger.sauce;
  document.getElementById('mildveg').innerHTML=mildBurger.veg;
  document.getElementById('mildprice').innerHTML=mildBurger.price;
}

function spicyprice(){
  var tax = 1.04712;
  var total= spicyBurger.price * tax;
  document.getElementById('total').innerHTML = "Total $" + total.toFixed(2);
}

function mildprice(){
  var tax = 1.04712;
  var total = mildBurger.price * tax;
  document.getElementById('final').innerHTML = "Total $" + total.toFixed(2);
}