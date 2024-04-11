const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
  <link rel="stylesheet" src="../footer.css" />
  <style>
    .footer-container {
      height: 182px;
      background-color: #960000;
      padding: 1em 2em;
      color: #fff;
      font-size: 16px;
      font-weight: bolder;
    }

    .footer-content-wrapper {
      height: 90%;
      display: flex;
      align-items: center;
      width: 45%;
      justify-content: space-between;
    }

    .footer-logo {
      height: 95px;
      width: 182px;
    }
  </style>

  <div class="footer-container">
    <div class="footer-content-wrapper">
      <img class="footer-logo" src="../assets/brothers-bnb-full-logo.png" />
      <div>
        <div>605 E Palace Parkway, Suite A3</div>
        <div>Grand Prarie, TX 75050</div>
        <div>972.264.1806</div>
        <div>Office Hours: Tue. - Fri. 8am - 4pm</div>
        <div>office@brothersbandb.com</div>
      </div>
      <div>
        <div>About Us</div>
        <div>Our Work</div>
        <div>Services</div>
        <div>Contact</div>
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