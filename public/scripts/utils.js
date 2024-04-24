function renderProjectCards(projectCardData) {
  const projectCardsContainer = document.querySelector('.project-cards-container');
  projectCardData.forEach(projectCard => {
    const card = document.createElement('project-card');
    card.setAttribute('image', projectCard.images[projectCard.images.length - 1]);

    const title = document.createElement('span');
    title.setAttribute('slot', 'project-title');
    title.innerHTML = projectCard.projectTitle;
    card.appendChild(title);
  
    projectCardsContainer.appendChild(card);
  });
}