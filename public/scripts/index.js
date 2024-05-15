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
  "../assets/projects/frankies/frankies-1.jpg",
  "../assets/projects/frankies/frankies-6.jpg",
  "../assets/projects/cci/cci-2.jpg",
  "../assets/projects/frankies/frankies-2.jpg",
  "../assets/projects/cci/cci-2.jpg",
  "../assets/projects/frankies/frankies-3.jpg",
  "../assets/projects/taste-project/taste-project-4.jpg",
  "../assets/projects/cci/cci-3.jpg",
  "../assets/projects/taste-project/taste-project-5.jpg",
  "../assets/projects/frankies/frankies-4.jpg",
  "../assets/projects/cci/cci-4.jpg",
  "../assets/projects/taste-project/taste-project-6.jpg",
  "../assets/projects/frankies/frankies-5.jpg",
  "../assets/projects/taste-project/taste-project-7.jpg",
  "../assets/projects/cci/cci-5.jpg",
  "../assets/projects/taste-project/taste-project-8.jpg",
  "../assets/projects/taste-project/taste-project-9.jpg",
  "../assets/projects/frankies/frankies-6.jpg",
  "../assets/projects/cci/cci-6.jpg",
];


function addInfoCards() {
  infoCardData.forEach(item => {
    const wrapper = document.querySelector('#info-cards-container');
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

async function fetchProjectData() {
  const response = await (await fetch('/project-data?' + new URLSearchParams({
    limit: 3
  }))).json();
  return response;
}

async function fetchReviews() {
  const response = await (await fetch('/reviews')).json();
  return response;
}

function renderReviews(reviews) {
  const reviewsCarousel = document.querySelector('reviews-carousel');
  reviewsCarousel.setAttribute('reviews', JSON.stringify(reviews));
}

async function init() {
  addInfoCards();
  populateCarousel();
  const projectCardData = await fetchProjectData();
  renderProjectCards(projectCardData);
  const reviews = await fetchReviews();
  renderReviews(reviews);
}

init();
