const carouselTemplate = document.createElement('template');
carouselTemplate.innerHTML = `
  <link rel="stylesheet" href="../styles/main.css" />
  <style>
    .carousel-container {
      height: 600px;
      width: 584px;
    }

    .carousel-container img {
      display: none;
      height: inherit;
      width: inherit;
      object-fit: cover;
    }

    .carousel-container img[class="active"] {
      display: block;
      animation-name: fadeIn;
      animation-duration: 1.5s
    }
    @keyframes fadeIn {
      from {opacity: .8}
      to {opacity: 1}
    }
  </style>

  <div class="carousel-container">
  <div>
`

class Carousel extends HTMLElement {
  index = 0;
  images;
  static observedAttributes = ['images'];
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(carouselTemplate.content.cloneNode(true));
  } 

  attributeChangedCallback() {
    if(this.getAttribute('images')) {
      this.setImages();
    };

    this.images = this.shadowRoot.querySelectorAll('img')

    this.updateContent();
    this.startInterval()
  }
  
  setImages() {
    const wrapper = this.shadowRoot.querySelector('.carousel-container');
    this.getAttribute('images').split(',').forEach(image => {
      const img = document.createElement('img');
      img.setAttribute('src', image);
      wrapper.appendChild(img);
    });
  }

  startInterval() {
    setInterval(() => {
      if(this.index === this.images.length - 1) {
        this.index = 0;
      } else {
        this.index++;
      }
      this.updateContent();
    }, 3000)
  }

  updateContent() {
    this.images.forEach(item => item.classList.remove('active'));
    this.images[this.index]?.classList?.add('active');
  }
}

window.customElements.define('image-carousel', Carousel);