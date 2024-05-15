const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
  <link rel="stylesheet" href="../styles/main.css" />
  <link rel="stylesheet" href="../styles/footer.css" />

  <div class="footer-container">
    <div class="footer-content-wrapper">
      <div class="footer-item">
        <div>605 E Palace Parkway, Suite A3</div>
        <div>Grand Prarie, TX 75050</div>
        <div>972.264.1806</div>
        <div>Office Hours: Tue. - Fri. 8am - 4pm</div>
        <div>office@brothersbandb.com</div>
      </div>
      <img class="footer-logo footer-item" src="../assets/BrothersB&B-Vector.png" />
      <div class="footer-item footer-links">
        <a href="/about" class="nav-item">About Us</a>
        <a href="/projects" class="nav-item">Our Work</a>
        <a href="/services" class="nav-item">Services</a>
        <a href="/contact" class="nav-item">Contact</a>
      </div>
    </div>
    <div>
      Copyright 2024 Brothers B&B Contracting, Inc | All Rights Reseved
    </div>
  </div>
`

class BnBFooter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(footerTemplate.content.cloneNode(true));
  } 
}

window.customElements.define('bnb-footer', BnBFooter);