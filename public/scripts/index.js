const infoCardData = [
  {
    subtitle: "Turn your dream designs into a reality.",
    title: "General Contracting",
    link: '/services'
  },
  {
    subtitle: "Work with a single expert. Save money & time.",
    title: "Design & Build",
    link: '/services'
  },
  {
    subtitle: "Expertise and experience in commercial construction.",
    title: "Our Work",
    link: '/projects'
  },
];

const carouselImages = [
  '../assets/image 4.png',
  '../assets/project-bar-1.jpg',
  '../assets/project-bar-6.jpg',
  '../assets/project-cafe-1.jpg'
];


function addInfoCards() {
  infoCardData.forEach(item => {
    const wrapper = document.querySelector('.info-cards-container');
    const infoCard = document.createElement('info-card');
    infoCard.setAttribute('subtitle', item.subtitle);
    infoCard.setAttribute('title', item.title);
    infoCard.setAttribute('link', item.link);
    wrapper.appendChild(infoCard);
  })
}

function populateCarousel() {
  const carousel = document.querySelector('data-carousel');
  carousel.setAttribute('images', carouselImages);

}

addInfoCards();
populateCarousel();