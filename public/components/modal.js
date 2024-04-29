const modalTemplate = document.createElement('template');
modalTemplate.innerHTML = `
  <link rel="stylesheet" href="../styles/main.css" />
  <link rel="stylesheet" href="../styles/modal.css" />

  <div class="modal-wrapper">
    <div class="modal-container">
        <button class="close-button">
            <h1>X</h1>
        </button>
        <slot name="content" />
    </div>
  </div>
`

class Modal extends HTMLElement {
  open = false;
  wrapper;
  static observedAttributes = ['scroll'];
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(modalTemplate.content.cloneNode(true));
  }

  connectedCallback() {
    this.wrapper = this.shadowRoot.querySelector('.modal-wrapper');
  }

  attributeChangedCallback() {
    const scroll = this.getAttribute('scroll');
    const body = document.querySelector('body');
    if(scroll) {
      this.open = true;
      this.wrapper.classList.add('open');
      this.wrapper.style.top = `${this.getAttribute('scroll')}px`;
      body.style.overflow = 'hidden';
      
      this.shadowRoot.querySelector('.close-button').addEventListener('click', () => {
        this.wrapper.classList.remove('open');
        body.style.overflow = 'scroll';
      });
    };
  }

}

window.customElements.define('coda-modal', Modal);
