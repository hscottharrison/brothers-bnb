function openModal(serviceType) {
  const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  const modal = document.querySelector('bnb-modal');
  modal.setAttribute('scroll', scrollPosition);
}

document.getElementById('design-button').addEventListener('click', () => {
  openModal('design');
})