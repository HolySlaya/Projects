total = 0;

function addGuestOne() {
  var addGuest = document.getElementById('CheckingIn').value;
  document.getElementById('CheckingIn').value = "";
  var newList = document.createElement('li');
  var newText = document.createTextNode(addGuest);
  newList.appendChild(newText);
  var position = document.getElementsByTagName('ol')[0];
  position.appendChild(newList);
  
  if(total >= 4) {
    document.getElementById('output').innerHTML = "NO MAS";
    document.getElementById('Welcome').style.visibility = "hidden";
  }

  
  else {
    total += 1;
    document.getElementById('output').innerHTML = total;
  }
}

function checkout() {
  total -= 1;
  document.getElementById('output').innerHTML = total;
}
