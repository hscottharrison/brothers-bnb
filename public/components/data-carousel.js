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

    @media screen and (max-width: 1100px) {
      .data-carousel-wrapper {
        flex-direction: column;
      }
      .data-card {
        max-width: 100%;
      }
    }
  </style>

  <div class="data-carousel-wrapper">
    <image-carousel></image-carousel>
    <div class="data-card">
      <h3>
        <slot name="header" />
      </h3>
      <slot name="content" />
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
  }
}

window.customElements.define('data-carousel', DataCarousel);