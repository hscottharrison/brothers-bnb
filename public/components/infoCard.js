
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
      padding: 1em;
    }

    .title {
      color: #960000;
    }

    .info-card-container:hover {
      color: #fff;
      background-color: #960000;
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
    <span class="sub-title"></span>
    <h3 class="title"></h3>
    <span class="plus-button">+</span>
  <div>
`

class InfoCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(infoCardTemplate.content.cloneNode(true));
  } 

  connectedCallback() {
    if(this.getAttribute('subtitle')) {
      this.shadowRoot.querySelector('.sub-title').innerHTML = this.getAttribute('subtitle');
    }
    if(this.getAttribute('title')) {
      this.shadowRoot.querySelector('.title').innerHTML = this.getAttribute('title');
    }

    this.shadowRoot.querySelector('.info-card-container').addEventListener('click', () => {
      window.location.href = this.getAttribute('link');
    });

    this.shadowRoot.querySelector('.info-card-container').addEventListener('mouseover', () => {
      this.shadowRoot.querySelector('.plus-button').style.color = '#fff';
      this.shadowRoot.querySelector('.title').style.color = '#fff';
    });
    this.shadowRoot.querySelector('.info-card-container').addEventListener('mouseout', () => {
      this.shadowRoot.querySelector('.plus-button').style.color = '#960000';
      this.shadowRoot.querySelector('.title').style.color = '#960000';
    });
  }
}

window.customElements.define('info-card', InfoCard);