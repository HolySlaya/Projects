roomOneTotal = 0;
roomTwoTotal = 0;
roomThreeTotal = 0;
roomFourTotal = 0;
roomFiveTotal = 0;
roomSixTotal = 0;

function addGuestOne() {
  if (roomOneTotal != 4) {
  var addGuest = document.getElementById('CheckingIn').value;
  document.getElementById('CheckingIn').value = "";
  var newList = document.createElement('li');
  var newText = document.createTextNode(addGuest);
  newList.appendChild(newText);
  var position = document.getElementsByTagName('ol')[0];
  position.appendChild(newList);
  roomOneTotal++;
}
  else if(roomOneTotal >= 3) {
    document.getElementsByClassName('people').innerHTML = "NO MAS";
    document.getElementById('In').style.visibility = "hidden";
  }
  else {
    roomOneTotal += 1;
    document.getElementsByClassName('people').innerHTML = roomOneTotal;
  }
}

function checkout() {
  var getV = document.getElementById('num1').value -1;
  var getLi = document.getElementsByTagName('li')[getV];
  var getParent = document.getElementById('listOne').removeChild(getLi);
  roomOneTotal--;
  
  if(roomOneTotal <= 2) {
  document.getElementsByClassName('people').innerHTML = "Open";
  document.getElementById('In').style.visibility = "visible";
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function addGuestOne2() {
  if (roomTwoTotal != 4) {
  var addGuest = document.getElementById('CheckingIn2').value;
  document.getElementById('CheckingIn2').value = "";
  var newList = document.createElement('li');
  var newText = document.createTextNode(addGuest);
  newList.appendChild(newText);
  var position = document.getElementsByTagName('ol')[1];
  position.appendChild(newList);
  roomTwoTotal++;
}
  else if(roomTwoTotal >= 3) {
    document.getElementsByClassName('people2').innerHTML = "NO MAS";
    document.getElementById('In2').style.visibility = "hidden";
  }
  else {
    roomTwoTotal += 1;
    document.getElementsByClassName('people2').innerHTML = roomTwoTotal;
  }
}

function checkout2() {
  var getV = document.getElementById('num2').value -1;
  var getLi = document.getElementsByTagName('li')[getV];
  var getParent = document.getElementById('listTwo').removeChild(getLi);
  roomTwoTotal--;
  
  if(roomTwoTotal <= 2) {
  document.getElementsByClassName('people2').innerHTML = "Open";
  document.getElementById('In2').style.visibility = "visible";
  }
}

///////////////////////////////////////////////////////////////////////////////

function addGuestOne3() {
  if (roomThreeTotal != 4) {
  var addGuest = document.getElementById('CheckingIn3').value;
  document.getElementById('CheckingIn3').value = "";
  var newList = document.createElement('li');
  var newText = document.createTextNode(addGuest);
  newList.appendChild(newText);
  var position = document.getElementsByTagName('ol')[0];
  position.appendChild(newList);
  roomThreeTotal++;
}
  else if(roomThreeTotal >= 3) {
    document.getElementsByClassName('people3').innerHTML = "NO MAS";
    document.getElementById('In').style.visibility = "hidden";
  }
  else {
    roomThreeTotal += 1;
    document.getElementsByClassName('people3').innerHTML = roomThreeTotal;
  }
}

function checkout3() {
  var getV = document.getElementById('num3').value -1;
  var getLi = document.getElementsByTagName('li')[getV];
  var getParent = document.getElementById('listThree').removeChild(getLi);
  roomOneTotal--;
  
  if(roomThreeTotal <= 2) {
  document.getElementsByClassName('people3').innerHTML = "Open";
  document.getElementById('In3').style.visibility = "visible";
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function addGuestOne4() {
  if (roomFourTotal != 4) {
  var addGuest = document.getElementById('CheckingIn4').value;
  document.getElementById('CheckingIn4').value = "";
  var newList = document.createElement('li');
  var newText = document.createTextNode(addGuest);
  newList.appendChild(newText);
  var position = document.getElementsByTagName('ol')[1];
  position.appendChild(newList);
  roomFourTotal++;
}
  else if(roomFourTotal >= 3) {
    document.getElementsByClassName('people4').innerHTML = "NO MAS";
    document.getElementById('In4').style.visibility = "hidden";
  }
  else {
    roomFourTotal += 1;
    document.getElementsByClassName('people4').innerHTML = roomFourTotal;
  }
}

function checkout4() {
  var getV = document.getElementById('num4').value -1;
  var getLi = document.getElementsByTagName('li')[getV];
  var getParent = document.getElementById('listFour').removeChild(getLi);
  roomFourTotal--;
  
  if(roomFourTotal <= 2) {
  document.getElementsByClassName('people4').innerHTML = "Open";
  document.getElementById('In4').style.visibility = "visible";
  }
}

///////////////////////////////////////////////////////////////////////////////

function addGuestOne() {
  if (roomOneTotal != 4) {
  var addGuest = document.getElementById('CheckingIn').value;
  document.getElementById('CheckingIn').value = "";
  var newList = document.createElement('li');
  var newText = document.createTextNode(addGuest);
  newList.appendChild(newText);
  var position = document.getElementsByTagName('ol')[0];
  position.appendChild(newList);
  roomOneTotal++;
}
  else if(roomOneTotal >= 3) {
    document.getElementsByClassName('people').innerHTML = "NO MAS";
    document.getElementById('In').style.visibility = "hidden";
  }
  else {
    roomOneTotal += 1;
    document.getElementsByClassName('people').innerHTML = roomOneTotal;
  }
}

function checkout() {
  var getV = document.getElementById('num1').value -1;
  var getLi = document.getElementsByTagName('li')[getV];
  var getParent = document.getElementById('listOne').removeChild(getLi);
  roomOneTotal--;
  
  if(roomOneTotal <= 2) {
  document.getElementsByClassName('people').innerHTML = "Open";
  document.getElementById('In').style.visibility = "visible";
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function addGuestOne2() {
  if (roomTwoTotal != 4) {
  var addGuest = document.getElementById('CheckingIn2').value;
  document.getElementById('CheckingIn2').value = "";
  var newList = document.createElement('li');
  var newText = document.createTextNode(addGuest);
  newList.appendChild(newText);
  var position = document.getElementsByTagName('ol')[1];
  position.appendChild(newList);
  roomTwoTotal++;
}
  else if(roomTwoTotal >= 3) {
    document.getElementsByClassName('people2').innerHTML = "NO MAS";
    document.getElementById('In2').style.visibility = "hidden";
  }
  else {
    roomTwoTotal += 1;
    document.getElementsByClassName('people2').innerHTML = roomTwoTotal;
  }
}

function checkout2() {
  var getV = document.getElementById('num2').value -1;
  var getLi = document.getElementsByTagName('li')[getV];
  var getParent = document.getElementById('listTwo').removeChild(getLi);
  roomTwoTotal--;
  
  if(roomTwoTotal <= 2) {
  document.getElementsByClassName('people2').innerHTML = "Open";
  document.getElementById('In2').style.visibility = "visible";
  }
}

///////////////////////////////////////////////////////////////////////////////
