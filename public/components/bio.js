const bioTemplate = document.createElement('template');
bioTemplate.innerHTML = `
  <link rel="stylesheet" href="../styles/main.css" />
  <link rel="stylesheet" href="../styles/bio.css" />

  <div class="bio-container">
    <div class="tedshot">
      <slot name="tedshot" />
    </div>
    <h3 class="name">
    </h3>
    <h4 class="title">
    </h4>
    <span class="bio-button"><strong>BIO ></strong></span>
  </div>

  <div class="bio-content">
    <button class="close-button">
        <h1>X</h1>
    </button>
    <div class="bio-content-wrapper">
      <div class="tedshot">
        <slot name="tedshot-hidden" />
      </div>
      <div>
        <h3 class="name">
        </h3>
        <h4 class="title">
        </h4>
        <p>
          <slot name="bio" />
        </p>
      </div>
    </div>
  </div>
`

class Bio extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(bioTemplate.content.cloneNode(true));
  } 

  connectedCallback() {
    // ATTRIBUTES
    const nameAttr = this.getAttribute('name');
    const titleAttr = this.getAttribute('title');

    // ELEMENTS
    const nameElement = this.shadowRoot.querySelectorAll('.name');
    const titleElement = this.shadowRoot.querySelectorAll('.title');

    // SET ATTRIBUTES
    nameElement.forEach(el => el.textContent = nameAttr);
    titleElement.forEach(el => el.textContent = titleAttr);
    
    this.shadowRoot.querySelector('.bio-button').addEventListener('click', () => {
      this.shadowRoot.querySelector('.bio-content').style.display = 'block';
      this.shadowRoot.querySelector('.bio-content').style.transition = 'all .3s ease';
    });

    this.shadowRoot.querySelector('.close-button').addEventListener('click', () => {  
      this.shadowRoot.querySelector('.bio-content').style.display = 'none';
    });
  }

}

window.customElements.define('team-bio', Bio);