let r=75;
const pi=3.14;
function square(pi,r) {
	return pi*r*r;
}
let answer = document.getElementById('answer');
function showAnswer() { 
	answer.innerHTML='Площа круга з радіусом ' + r + ' дорівнює' + square(pi,r);
}

function showNumbers(){
var i;
for (i = 12; i <= 122; i++) {
  var newLi = document.createElement('li');
  newLi.innerHTML = 'число: ' + i;
  numbers.appendChild(newLi);  
}
}
	

	

 