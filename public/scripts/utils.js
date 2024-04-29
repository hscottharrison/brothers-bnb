
function openProjectModal(projectCard) {
  const modal = document.querySelector('coda-modal');

  const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  modal.setAttribute('scroll', scrollPosition);

  const images = projectCard.images;
  const photoGrid = document.querySelector('.photo-grid');
  photoGrid.innerHTML = '';
  images.forEach((image) => {
    const img = document.createElement('img');
    img.setAttribute('src', image);
    photoGrid.appendChild(img);
  });

  const projectData = document.querySelector('.project-data');
  const title = document.querySelector('.project-title');
  const category = document.querySelector('.project-category');
  const location = document.querySelector('.project-location');
  const description = document.querySelector('.project-description');
  title.innerHTML = projectCard.projectTitle;
  category.innerHTML = projectCard.projectType;
  location.innerHTML = projectCard.projectLocation;
  description.innerHTML = projectCard.projectDescription;
}
function renderProjectCards(projectCardData) {
  const projectCardsContainer = document.querySelector('#project-cards-container');
  projectCardData.forEach(projectCard => {
    const card = document.createElement('project-card');
    card.setAttribute('image', projectCard.images[projectCard.images.length - 1]);

    const title = document.createElement('span');
    title.setAttribute('slot', 'project-title');
    title.innerHTML = projectCard.projectTitle;
    card.appendChild(title);

    card.addEventListener('click', () => {
      openProjectModal(projectCard);
    });
  
    projectCardsContainer.appendChild(card);
  });
}