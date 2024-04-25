const projectCardTemplate = document.createElement('template');
projectCardTemplate.innerHTML = `
  <link rel="stylesheet" href="../styles/main.css" />
  <link rel="stylesheet" href="../styles/projectCard.css" />

  <div class="project-card">
    <div class="project-card-overlay">
      <h3 class="project-title">
        <slot name="project-title" />
      </h3>
    </div>
  <div>
`

class ProjectCard extends HTMLElement {
  static observedAttributes = ['data'];
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(projectCardTemplate.content.cloneNode(true));
  } 

  connectedCallback() {
    const projectCard = this.shadowRoot.querySelector(".project-card");
    if (this.getAttribute('image')) {
      projectCard.style.background = `url(${this.getAttribute('image')})`;
      projectCard.style.backgroundSize = 'cover';
    }
    const overlay = this.shadowRoot.querySelector(".project-card-overlay");
    projectCard.addEventListener('mouseover', () => {
      overlay.style.display = 'flex';
    });
    projectCard.addEventListener('mouseleave', () => {
      overlay.style.display = 'none';
    });
  }

  async attributeChangedCallback() {
    if (this.getAttribute('data')) {
      const data = JSON.parse(this.getAttribute('data'));
      console.log('DATA', data);
    }
  }

}

window.customElements.define('project-card', ProjectCard);