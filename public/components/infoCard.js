
const infoCardTemplate = document.createElement('template');
infoCardTemplate.innerHTML = `
  <link rel="stylesheet" href="../styles/main.css" />
  <style>
    .info-card-container {
      height: 282px;
      width: 254px;
      border-bottom: 8px solid #960000;
      filter: drop-shadow(2px 2px 4px black);
    }
  </style>

  <div class="info-card-container">
  <div>
`

class InfoCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(infoCardTemplate.content.cloneNode(true));
  } 
}

window.customElements.define('info-card', InfoCard);