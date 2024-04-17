const introCardTemplate = document.createElement('template');
introCardTemplate.innerHTML = `
  <link rel="stylesheet" href="../styles/main.css" />
  <link rel="stylesheet" href="../styles/introCard.css" />
  <div class="introduction-wrapper">
    <div class="introduction">
      <h2 class="introduction-header">
        <slot name="header" />
      </h2>
      <p class="introduction-content">
        <slot name="content"
      </p>
    </div> 
  </div>
`

class IntroCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(introCardTemplate.content.cloneNode(true));
  } 

}

window.customElements.define('intro-card', IntroCard);