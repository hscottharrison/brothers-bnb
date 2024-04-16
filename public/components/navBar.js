const template = document.createElement('template');
template.innerHTML = `
  <link rel="stylesheet" href="../styles/main.css" />
  <link rel="stylesheet" href="../styles/navbar.css" />

  <div class="nav-container">
    <a href="/">
      <img src="../assets/brothers-bnb-logo.png" />
    </a>
    <div class="nav-items">
      <a id="about" href="/about">About Us</a>
      <a id="projects" href="/projects">Projects</a>
      <a id="services" href="/services">Services</a>
      <a id="contact" href="/contact">Contact</a>
    </div>
  <div>
`

class NavBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    console.log(window.location.href);
  }
}

window.customElements.define('nav-bar', NavBar);