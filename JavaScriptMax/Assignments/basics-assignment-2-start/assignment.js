const task3Element = document.getElementById('task-3');

function display() {
  alert('Hello, Abo Hamid !');
}

function displayName(name) {
  alert(name + '!');
}

function combine(name1, name2, name3) {
  return name1 + ' ' + name2 + ' ' + name3;
}

display();
displayName('Ahmed');
task3Element.addEventListener('click', display);
const combinedString = combine('A', 'B', 'C');
alert(combinedString);
