const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.menu-nav-link');

function handleIndicator(el) {
  items.forEach(item => {
    item.classList.remove('is-active');
  });

  el.classList.add('is-active');

  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.left = `${el.offsetLeft}px`;
}

items.forEach(item => {
  item.addEventListener('click', e => {
    handleIndicator(e.target);
  });
  if (item.classList.contains('is-active')) {
    handleIndicator(item);
  }
});
