const modalTemplate = document.createElement('template');
modalTemplate.innerHTML = `
  <link rel="stylesheet" href="../styles/main.css" />
  <link rel="stylesheet" href="../styles/modal.css" />

  <div class="modal-wrapper">
    <div class="modal-container">
      <div class="modal-side modal-image">
        Hello
      </div>
      <div class="modal-side modal-content">
        <button class="close-button">
          <h1>X</h1>
        </button
      </div>
    </div>
  </div>
`

class Modal extends HTMLElement {
  open = false;
  static observedAttributes = ['scroll'];
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(modalTemplate.content.cloneNode(true));
  }

  connectedCallback() {
  }

  attributeChangedCallback() {
    if(this.getAttribute('scroll')) {
      this.open = true;
      const wrapper = this.shadowRoot.querySelector('.modal-wrapper');
      wrapper.classList.add('open');
      wrapper.style.top = `${this.getAttribute('scroll')}px`;
      document.querySelector('body').style.overflow = 'hidden';
      
      this.shadowRoot.querySelector('.close-button').addEventListener('click', () => {
        const wrapper = this.shadowRoot.querySelector('.modal-wrapper');
        wrapper.classList.remove('open');
      });
    };
  }

}

window.customElements.define('bnb-modal', Modal);
