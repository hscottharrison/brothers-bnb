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

const carouselData = {
  title: 'Established. Dependable. Flexable.',
  paragraphs: 'For over 30 years, Brothers B and B has proven itself time and time again by providing various types of clients with quality projects, making their visions a reality. We continue to offer our clients the same service, quality and integrity as our original founder. Our decades of repeat and referral business offers a testimony of our competitive pricing, quality workmanship and our commitment to excellence. Whether it is a small or large project, our team strives to create a life long client. We have managed remodel projects up to $4,000,000 across the Dallas/Ft. Worth Metroplex and our projects are bid and managed by the owners, who are hands on and easily accessible by the client.|Our philosophy is to develop a long term relationship with our sub-contractors, vendors and suppliers. This creates an environment of trust that helps projects run smooth and efficient. Many of our vendors have served us and the Metroplex for decades, which gives us the foundation to meet the needs of our growing client base.'
}


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
  carousel.setAttribute('title', carouselData.title);
  carousel.setAttribute('paragraphs', carouselData.paragraphs);

}

addInfoCards();
populateCarousel();