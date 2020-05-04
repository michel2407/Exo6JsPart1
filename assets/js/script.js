
function validate(){
  var size = document.getElementById('shoeSize').value;
  var birth = document.getElementById('birth').value;
  var multi = ((size * 2 + 5) * 50 - birth) + 1769;
  alert(multi);
}
