const contentModalTemplate = document.createElement('template');
contentModalTemplate.innerHTML = `
  <link rel="stylesheet" href="../styles/main.css" />
  <link rel="stylesheet" href="../styles/modal.css" />

  <div class="modal-wrapper">
    <div class="modal-container">
      <div class="modal-side modal-image">
        <img />
      </div>
      <div class="modal-side modal-content">
        <button class="close-button">
          <h1>X</h1>
        </button>
        <h2>
          <slot name="header" />
        </h2>
        <h3>
          <slot name="subHeader" />
        </h3>
        <div class="content">
          <slot name="content" />
        </div>
      </div>
    </div>
  </div>
`

class ContentModal extends HTMLElement {
  open = false;
  wrapper;
  static observedAttributes = ['scroll'];
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(contentModalTemplate.content.cloneNode(true));
  }

  connectedCallback() {
    this.wrapper = this.shadowRoot.querySelector('.modal-wrapper');
  }

  attributeChangedCallback() {
    const scroll = this.getAttribute('scroll');
    const body = document.querySelector('body');
    const image = this.shadowRoot.querySelector('img');
    if(scroll) {
      this.open = true;
      this.wrapper.classList.add('open');
      this.wrapper.style.top = `${this.getAttribute('scroll')}px`;
      body.style.overflow = 'hidden';
      image.setAttribute('src', this.getAttribute('image'));
      
      this.shadowRoot.querySelector('.close-button').addEventListener('click', () => {
        this.wrapper.classList.remove('open');
        body.style.overflow = 'scroll';
      });
    };
  }

}

window.customElements.define('content-modal', ContentModal);
