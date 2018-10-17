function addGuestOne() {
  var addGuest = document.getElementById('CheckingIn1').value;
  document.getElementById('CheckingIn1').value = "";
  var newList = document.createElement('li');
  var newText = document.createTextNode(addGuest);
  newList.appendChild(newText);
  var position = document.getElementsByTagName('ol')[0];
  position.appendChild(newList);
}
    <script src="Project2script.js"></script>