function addInfoCards() {
  const array = [1, 2, 3];
  array.forEach(item => {
    const wrapper = document.querySelector('.info-cards-container');
    const infoCard = document.createElement('info-card');
    wrapper.appendChild(infoCard);
  })
}

addInfoCards();