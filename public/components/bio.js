const bioTemplate = document.createElement('template');
bioTemplate.innerHTML = `
  <link rel="stylesheet" href="../styles/main.css" />
  <style>
    .bio-container {
      margin: 0 4em;
    }
  </style>

  <div class="bio-container">
    <slot name="tedshot" />
    <slot name="bio" />
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