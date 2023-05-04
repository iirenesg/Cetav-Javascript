const searchParams = new URLSearchParams(location.search);
let slide = Number(searchParams.get('slide')) || 0;

document.querySelector(`#s${slide}`).classList.add('show');

document.querySelector('#next').addEventListener('click', () => {
  document.querySelector(`#s${slide}`).classList.remove('show');
  slide = slide + 1;
  document.querySelector(`#s${slide}`).classList.add('show');
});

document.querySelector('#prev').addEventListener('click', () => {
  document.querySelector(`#s${slide}`).classList.remove('show');
  slide = slide - 1;
  document.querySelector(`#s${slide}`).classList.add('show');
});