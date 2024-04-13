const dataCarouselTemplate = document.createElement('template');
dataCarouselTemplate.innerHTML = `
  <link rel="stylesheet" href="../styles/main.css" />
  <style>
    .data-carousel-wrapper {
      display: flex;
      align-items: center;
      height: 100%;
    }
    .data-card {
      max-width: 70%;
      margin-left: -3em;
      z-index: 99999;
      background-color: #fff;
      padding: 3em 0 3em 3em;
    }

    .data-card h3 {
      color: #960000;
      font-size: 24px;
    }

    .data-card p {
      margin-top: 1em;
      font-size: 16px;
    }
  </style>

  <div class="data-carousel-wrapper">
    <image-carousel></image-carousel>
    <div class="data-card">
      
    </div>
  <div>
`

class DataCarousel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(dataCarouselTemplate.content.cloneNode(true));
  } 

  connectedCallback() {
    const images = this.getAttribute('images');
    if(images) {
      const carousel = this.shadowRoot.querySelector('image-carousel');
      carousel.setAttribute('images', images);
    }

    this.initData();
  }

  initData() {
    const dataCard = this.shadowRoot.querySelector('.data-card');
    const title = document.createElement('h3');
    title.innerHTML = this.getAttribute('title');
    dataCard.appendChild(title)

    this.getAttribute('paragraphs')
    .split('|')
    .forEach(paragraph => {
      const p = document.createElement('p');
      p.innerHTML = paragraph;
      dataCard.appendChild(p);
    })
  }
}

window.customElements.define('data-carousel', DataCarousel);