'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
//Selects only the first one
// const showModal = document.querySelector('.show-modal');
// Selects all buttons and aggregates them in a nodeList
const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
// to print Each element use a loop
// I will use here for of

// for (let i = 0; i < showModal.length; i++) {
//   // console.log(showModal[i].textContent);
//   showModal[i].addEventListener('click', function openModal() {
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });

// Showing the modal
function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
// Refactored
for (let i = 0; i < showModal.length; i++) {
  // console.log(showModal[i].textContent);
  showModal[i].addEventListener('click', openModal);
}

const collapseModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Closing the modal by the X symbol
// we attach the element itself to closeModal constant
closeModal.addEventListener('click', collapseModal);

// closing the modal by clicking on the overlay
overlay.addEventListener('click', collapseModal);

// closing the element by adding an event listener for the whole document that listen for keyboard events (global events)
document.addEventListener('keydown', e => {
  // console.log(e);
  // console.log(e.key);
  // if the key is Esc
  // and if also the moadal is opened (it's opend when it doesnot contain modal class)
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    collapseModal();
  }
});
