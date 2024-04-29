const heroTemplate = document.createElement('template');
heroTemplate.innerHTML = `
  <link rel="stylesheet" href="../styles/main.css" />
  <link rel="stylesheet" href="../styles/hero.css"/>

  <section class="hero-container">
    <div class="hero-shadow-wrapper">
      <div class="header-wrapper">
        <h1 class="hero-header">
          <slot name="headerMessage" />
        </h1>
      </div>
    </div>
  </section>
`

class Hero extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(heroTemplate.content.cloneNode(true));
  } 

  connectedCallback() {
    const heroContainer = this.shadowRoot.querySelector('.hero-container');
    const heroShadowWrapper = this.shadowRoot.querySelector('.hero-shadow-wrapper');

    if(this.getAttribute('image')) {
      heroContainer.style.background = ` linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 59%, rgba(255, 255, 255, 0.65) 100%), url(${this.getAttribute('image')})`;
      heroContainer.style.backgroundSize = 'cover';
    }

    if(this.getAttribute('height')) {
      heroContainer.style.height = this.getAttribute('height');
      heroShadowWrapper.style.height = `calc(${this.getAttribute('height')} - 75px`;
    }
  }
}

window.customElements.define('hero-container', Hero);