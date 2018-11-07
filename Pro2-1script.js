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
    document.getElementById('people').innerHTML = "NO MAS";
    document.getElementById('In').style.visibility = "hidden";
  }

  else {
    total += 1;
    document.getElementById('people').innerHTML = total;
  }
}

function checkout() {
  var getV = document.getElementById('num1').value;
  var getLi = document.getElementsByTagName('li')[getV];
  var getParent = getLi.parentNode;
  getParent.removeChild(getLi);
  total--;
}

function addGuestOne2() {
  var addGuest = document.getElementById('CheckingIn2').value;
  document.getElementById('CheckingIn2').value = "";
  var newList = document.createElement('li');
  var newText = document.createTextNode(addGuest);
  newList.appendChild(newText);
  var position = document.getElementsByTagName('ol')[0];
  position.appendChild(newList);
  
  if(total >= 4) {
    document.getElementById('people2').innerHTML = "NO MAS";
    document.getElementById('In2').style.visibility = "hidden";
  }

  else {
    total += 1;
    document.getElementById('people2').innerHTML = total;
  }
}

function checkout2() {
  var getV = document.getElementById('num2').value;
  var getLi = document.getElementsByTagName('li')[getV];
  var getParent = getLi.parentNode;
  getParent.removeChild(getLi);
  total--;
}