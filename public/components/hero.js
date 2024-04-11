
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
    if(this.getAttribute('image')) {
      this.shadowRoot.querySelector('.hero-container').style.background = `url(${this.getAttribute('image')})`;
      this.shadowRoot.querySelector('.hero-container').style.backgroundSize = 'cover';
    }
  }
}

window.customElements.define('hero-container', Hero);