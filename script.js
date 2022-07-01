'use strict';

const modalBtn = document.querySelectorAll('.show-modal');
const modalMessage = document.querySelector('.modal');
const modalOverlay = document.querySelector('.overlay');
const closeModalX = document.querySelector('.close-modal');

// function for open modal
function openModal() {
  modalMessage.classList.remove('hidden');
  modalOverlay.classList.remove('hidden');
}

// function for close modal
function closeModal() {
  modalMessage.classList.add('hidden');
  modalOverlay.classList.add('hidden');
}

// show modal on click
modalBtn.forEach(function (modal) {
  modal.addEventListener('click', openModal);
});

// close modal by clicking
closeModalX.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// close modal by pressing Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modalMessage.classList.contains('hidden')) {
    closeModal();
  }
});

// modalBtn.forEach(function (modal) {
//   modal.addEventListener('click', function () {
//     modalMessage.classList.remove('hidden');
//     modalOverlay.classList.remove('hidden');
//   });
// });

// function openModal() {
//   modalMessage.classList.remove('hidden');
//   modalOverlay.classList.remove('hidden');
// }

// function closeModal() {
//   modalMessage.classList.add('hidden');
//   modalOverlay.classList.add('hidden');
// }

// closeModalX.addEventListener('click', toggleModal);
