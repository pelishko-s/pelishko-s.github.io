/*писати код тут*/
let classes = [
['4-А', '4-Б', '---', '---', '8-А', '9-А', '9-Б'],
['Інформатика', 'Інформатика', '---', '---', 'Математика', 'Інформатика', 'Математика'],
['4-В', '---', '---', '10-Б', '8-В', '9-В', '10-А'],
['Математика', '---', '---', 'Інформатика', 'Математика', 'Інформатика', 'Інформатика'],
['---', '---', '8-Б', '4-Г', '10-А', '11', '9-Б' ],
['---', '---', 'Інформатика', 'Інформатика', 'Математика', 'Інформатика', 'Інформатика'],
['---', '2-Г', '---', '---', '8-А', '9-А', '9-В' ],
['---', 'Інформатика', '---', '---', 'Математика', 'Інформатика', 'Математика'],
['---', '---', '9-А', '8-В', '8-Б', '11', '10-Б' ],
['---', '---', 'Математика', 'Інформатика', 'Математика', 'Інформатика', 'Інформатика'],
]

let monday = document.getElementById('monday-lessons');
let tuesday = document.getElementById('tuesday-lessons');
let wednesday = document.getElementById('wednesday-lessons');
let thursday = document.getElementById('thursday-lessons');
let friday = document.getElementById('friday-lessons');


	for (var i = 0; i <= 6; i++){
  monday.innerHTML += i+1 + ". Урок: " + classes[1][i] + " Клас: " + classes[0][i] + '<br>';
  tuesday.innerHTML += i+1 + ". Урок: " + classes[3][i]+ " Клас: " + classes[2][i] + '<br>';
  wednesday.innerHTML += i+1 + ". Урок: " +classes[5][i] + " Клас: " + classes[4][i] + '<br>';
  thursday.innerHTML += i+1 + ". Урок: " + classes[7][i] + " Клас: " + classes[6][i] + '<br>';
  friday.innerHTML += i+1 + ". Урок: " + classes[9][i] + " Клас: " + classes[8][i] + '<br>';
}

