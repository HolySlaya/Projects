total = 0;

function addGuestOne() {
  var addGuest = document.getElementById('CheckingIn1').value;
  document.getElementById('CheckingIn1').value = "";
  var newList = document.createElement('li');
  var newText = document.createTextNode(addGuest);
  newList.appendChild(newText);
  var position = document.getElementsByTagName('ol')[0];
  position.appendChild(newList);
  
  if(total < 5) {
    document.getElementById('Stop Coming').innerHTML = ol;
  }

  else if ((total >4) && (total < 5)) {
    document.getElementById('Stop Coming').innerHTML = "The room is full";
  }
  
}

function checkout() {
  var people = document.getElementById('guests').value;
  var getRidOf = document.getElementsByTagName('li')[guests];
  var room = getRidOf.parentNode;
  room.removeChild(getRidOf);
}