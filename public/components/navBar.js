const template = document.createElement('template');
template.innerHTML = `
  <link rel="stylesheet" href="../styles/navbar.css" />

  <div class="nav-container">
    <img src="../assets/brothers-bnb-logo.png" />
    <div class="nav-items">
      <span>About Us</span>
      <span>Projects</span>
      <span>Services</span>
      <span>Contact</span>
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