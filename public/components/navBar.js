const template = document.createElement('template');
template.innerHTML = `

  <style>
    .nav-container {
      height: 50px;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      display: flex;
      justify-content: space-between;
      position: relative;
    }
    .nav-items {
      width: 50%;
      display: flex;
      justify-content: space-around;
      color: #fff;
      height: 100%;
      align-items: center;
      position: absolute;
      right: 8px;
    }
  </style>

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