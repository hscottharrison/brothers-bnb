const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
  <link rel="stylesheet" href="../styles/main.css" />
  <link rel="stylesheet" href="../styles/footer.css" />

  <div class="footer-container">
    <div class="footer-content-wrapper">
      <img class="footer-logo footer-item" src="../assets/BrothersB&B-Vector.png" />
      <div class="footer-item">
        <div>605 E Palace Parkway, Suite A3</div>
        <div>Grand Prarie, TX 75050</div>
        <div>972.264.1806</div>
        <div>Office Hours: Tue. - Fri. 8am - 4pm</div>
        <div>office@brothersbandb.com</div>
      </div>
      <div class="footer-item footer-links">
        <div class="nav-item">About Us</div>
        <div class="nav-item">Our Work</div>
        <div class="nav-item">Services</div>
        <div class="nav-item">Contact</div>
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