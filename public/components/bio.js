const bioTemplate = document.createElement('template');
bioTemplate.innerHTML = `
  <link rel="stylesheet" href="../styles/main.css" />
  <link rel="stylesheet" href="../styles/bio.css" />

  <div class="bio-container">
    <div class="picture-and-title">
      <div class="tedshot">
        <slot name="tedshot" />
      </div>
      <h3 class="name">
        <slot name="name" />
      </h3>
      <h3 class="title">
        <slot name="title" /> 
      </h3>
    </div>
    <p>
      <slot name="bio" />
    </p>
  <div>
`

class Bio extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(bioTemplate.content.cloneNode(true));
  } 

}

window.customElements.define('team-bio', Bio);