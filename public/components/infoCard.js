
const infoCardTemplate = document.createElement('template');
infoCardTemplate.innerHTML = `
  <link rel="stylesheet" href="../styles/main.css" />
  <style>
    .info-card-container {
      height: 282px;
      width: 254px;
      border-bottom: 8px solid #960000;
      box-shadow: -1px 6px 5px #d9d9d9;
      position: relative;
    }

    .plus-button {
      font-size: 32px;
      color: #960000;
      position: absolute;
      bottom: 8px;
      left: 8px;
    }

  </style>

  <div class="info-card-container">
    <span class="plus-button">+</span>
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