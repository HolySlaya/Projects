var spicyBurger = {
  name: "Spicy Burger",
  meat: "Beef",
  sauce: "Barbeque Sauce",
  veg: ["Jalapeno", "Tomato", "pickles"],
  price: 10.00
};

var mildBurger = {
  name: "Burger",
  meat: "Beef",
  sauce: "ketchup",
  veg: ["Lettuce", "Tomato", "pickles"],
  price: 10.00
};

function spicy() {
  document.getElementById('spicyname').innnerHTML=spicyBurger.name;
  document.getElementById('spicymeat').innnerHTML=spicyBurger.meat;
  document.getElementById('spicysauce').innnerHTML=spicyBurger.sauce;
  document.getElementById('spicyveg').innnerHTML=spicyBurger.veg;
  document.getElementById('spicyprice').innnerHTML=spicyBurger.price;
}

function mild() {
  document.getElementById('mildname').innnerHTML=mildBurger.name;
  document.getElementById('mildmeat').innnerHTML=mildBurger.meat;
  document.getElementById('mildsauce').innnerHTML=mildBurger.sauce;
  document.getElementById('mildveg').innnerHTML=mildBurger.veg;
  document.getElementById('mildprice').innnerHTML=mildBurger.price;
}

function price(){
 var tax = 1.04712;
 var total = spicy.price * tax;
 document.getElementById('taxes').innerHTML = total.toFixed(2)
}