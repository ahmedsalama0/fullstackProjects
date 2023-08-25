'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelector('.show-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// as though it puts all elements that share the same class in a nodelist

// Function Declaration
function openModal() {
  //  console.log(`Button ${i + 1} is clicked !`);
  modal.classList.remove('hidden');
  // alternate
  // Specifying the modal display property to block using JS without using CSS and dealing with the above classList.remove
  // modal.style.display = 'block';
  // but dealing with classes is alot easire, since the class might contains lots of properties, but if we selecting his with Js it becomes tedious
  overlay.classList.remove('hidden');
}

// Function expression (Anonymous function)
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Looping over (through) the nodeList that contains .show-modal

// when we want to do something in multiple elements simply loop over them
for (let i = 0; i < btnsOpenModal.length; i++) {
  // console.log(btnsOpenModal[i].textContent);
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

// btnCloseModal.addEventListener('click', function (e) {
//   console.log(e);
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// closing the modal when clicking outside it, basically on the overlay...
overlay.addEventListener('click', closeModal);
// e => Event
// we can surely use any name NOT just e
// we set that parameter in function to receive the event object
document.addEventListener('keydown', e => {
  // console.log('A key is pressed');
  // console.log(e);
  // console.log(e.key);
  // the event object recieved by the function includes the pressed key in key property, so we can actually access it by e.key or e['key']
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    // console.log('Esc was pressed');

    // We want to close the modal by Esc button when it is opend,
    // the modal is opened when it does not contain .hidden
    closeModal();
  }
  // Alternate to the above if statement
  // if (e.key === 'Escape') {
  //   // console.log('Esc was pressed');

  //   // We want to close the modal by Esc button when it is opend,
  //   // the modal is opened when it does not contain .hidden
  //   if (!modal.classList.contains('hidden')) {
  //     closeModal();
  //   }
  // }
});
