const template = document.createElement('template');
template.innerHTML = `
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="../styles/main.css" />
  <link rel="stylesheet" href="../styles/navbar.css" />

  <nav class="nav-container">
    <div>
      <a href="/">
        <img src="../assets/BrothersB&B-Vector-color.png" />
      </a>
    </div>
    <div class="nav-items">
      <a id="about" href="/about" class="nav-item">About Us</a>
      <a id="projects" href="/projects" class="nav-item">Projects</a>
      <a id="services" href="/services" class="nav-item">Services</a>
      <a id="contact" href="/contact" class="nav-item">Contact</a>
    </div>
    <div id="nav-menu-wrapper" class="nav-closed">
      <div class="nav-close-icon-wrapper" onClick="toggleNavMenu()">
        <span class="material-icons">close</span>
      </div>
      <div class="nav-menu-item-list">
        <a id="about" href="/about" class="nav-item">About Us</a>
        <a id="projects" href="/projects" class="nav-item">Projects</a>
        <a id="services" href="/services" class="nav-item">Services</a>
        <a id="contact" href="/contact" class="nav-item">Contact</a>
      </div>
	  </div>
	  <div class="nav-menu-icon">
      <span class="material-icons">menu</span>
    </div>
  </nav>
`

class NavBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.querySelector('.nav-menu-icon').addEventListener('click', () => {
      this.toggleNavMenu();  
    });
    this.shadowRoot.querySelector('.nav-close-icon-wrapper').addEventListener('click', () => {
      this.toggleNavMenu();
    });

    const location = window.location.pathname.slice(1);
    if(!location) return;
    this.shadowRoot.querySelectorAll(`#${location}`).forEach(item => {
      item.classList.add('active');
    });
  }

  toggleNavMenu() {
    const menu = this.shadowRoot.getElementById('nav-menu-wrapper');
    if (menu.classList.contains('nav-open')) {
      menu.classList.remove('nav-open');
    } else {
      menu.classList.add('nav-open');
    }
  }
}

window.customElements.define('nav-bar', NavBar);