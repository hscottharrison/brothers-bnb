const template = document.createElement('template');
template.innerHTML = `
  <link rel="stylesheet" href="../styles/main.css" />
  <link rel="stylesheet" href="../styles/navbar.css" />

  <div class="nav-container">
    <a href="/">
      <img src="../assets/brothers-bnb-logo.png" />
    </a>
    <div class="nav-items">
      <a href="/about">About Us</a>
      <a href="/projects">Projects</a>
      <a href="/services">Services</a>
      <a href="/contact">Contact</a>
    </div>
  <div>
`

class NavBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  } 
}

window.customElements.define('nav-bar', NavBar);