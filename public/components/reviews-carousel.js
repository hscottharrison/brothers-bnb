const reviewsCarouselTemplate = document.createElement('template');
reviewsCarouselTemplate.innerHTML = `
  <link rel="stylesheet" href="../styles/main.css" />
  <style>
    .reviews-carousel-container {
      min-width: 100%;
      height: 100%;
      background-color: #960000;
      padding: 4em;
      display: flex;
      align-items: center;
    }

    .review-wrapper {
      display: none;
      color: #fff;
    }

    .active {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    p {
      font-size: 16px;
      margin-bottom: 1em;
      font-weight: bold;
    }
  </style>
  <div class="reviews-carousel-container">
  </div>
`

class ReviewsCarousel extends HTMLElement {
  static observedAttributes = ['reviews'];
  reviews;
  index = 0;
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(reviewsCarouselTemplate.content.cloneNode(true));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'reviews' && oldValue !== newValue) {
      const parsedReviews = JSON.parse(newValue);
      const container = this.shadowRoot.querySelector('.reviews-carousel-container');
      parsedReviews.forEach(review => {
        // create wrapper
        const wrapper = document.createElement('div');
        wrapper.classList.add('review-wrapper');
        // create content
        const content = document.createElement('p');
        content.innerHTML = review.content;
        // create author
        const author = document.createElement('p');
        author.innerHTML = `- ${review.author}`;
        // append content and author to wrapper
        wrapper.appendChild(content);
        wrapper.appendChild(author);
        // append wrapper to container
        container.appendChild(wrapper);
      })

      this.reviews = this.shadowRoot.querySelectorAll('.review-wrapper');

      this.updateContent();
      this.startInterval();
    }

  }

  startInterval() {
    setInterval(() => {
      if(this.index === this.reviews.length - 1) {
        this.index = 0;
      } else {
        this.index++;
      }
      this.updateContent();
    }, 7000)
  }

  updateContent() {
    this.reviews.forEach(item => item.classList.remove('active'));
    this.reviews[this.index]?.classList?.add('active');
  }
}

window.customElements.define('reviews-carousel', ReviewsCarousel);
