const modalData = {
  gc: {
    header: 'General Contracting',
    image: '../assets/project-cafe-1.jpg',
    content: `
      <p class="design-content">
        We set ourselves apart by providing a personalized approach to each client we work with. As a leading commercial contractor in the Dallas/Ft Worth area, our team understands that each client has a unique set of requirements and it’s our goal to meet those needs by surpassing expectations.
      </p>
      <p class="design-content">
        Brothers B and B is founded on strong relationships we have developed with our subcontractors and partners over the years. Our vast network combines decades of knowledge, expertise and resources to deliver a successful construction project. We also have a network of specialists and suppliers whom we consult for projects that require special materials or applications. Whatever your project needs, we are able to deliver.
      </p>
      <p class="design-content">
        We provide a wide range of general contracting services including:
        <ul>
          <li>Soft demolition work</li>
          <li>Framing</li>
          <li>Drywall</li>
          <li>Tape, Bed and Paint</li>
          <li>Ceilings</li>
          <li>Flooring</li>
          <li>Tile</li>
          <li>Installation of door assemblies</li>
          <li>Electrical</li>
          <li>Plumbing</li>
          <li>Millwork and Countertops</li>
          <li>Storefront</li>
          <li>Roofing</li>
          <li>Welding</li>
        </ul>
      </p>
      <p class="design-content">
        Consider Brothers B and B to be your partner in construction. We begin the process with a thorough evaluation of your design plan of which will formulate the best course of action while taking into account your particular needs and suggestions. By working closely with you throughout the project, we will always be one step closer toward providing the outcome you expect.
      </p>
    `
  },
  design: {
    header: 'Design & Build',
    subHeader: 'Work with a single expert',
    image: '../assets/project-bar-1.jpg',
    content: `
      <div class="design-content-wrapper">
        <h3 class="design-header">ADDED VALUE<h3>
        <p class="design-content">
          By using Brothers B and B, from the very beginning of the project, you get a cost-effective perspective. We have the experience and know how to zero in on systems and finishes that can be value engineered to save time and money, without necessarily sacrificing the finished product. This allows you to act with far more confidence, as you move into your project, than if you had to take the process from designers and architects, to contractors and vendors yourself.
        <p>
      </div>
      <div class="design-content-wrapper">
        <h3 class="design-header">SAVE TIME</h3>
        <p class="design-content">
          We will walk you through the bidding process and move you from the architect’s design to the process of construction with ease. This may not seem like much, but it greatly reduces, if not removes, a potentially intricate and unpredictable process right out of the equation. Projects are bid by the owners, who also oversee their team as they work through your project with the skill and expertise you need.
        </p>
      </div>
      <div class="design-content-wrapper">
        <h3 class="design-header">EASY CHANGES</h3>
        <p class="design-content">
          As the process of construction begins, things will happen very quickly. However, if you suddenly feel a detail or aspect of construction must be changed, we are able to “adjust on the fly” and make the changes. Working with us means that details can be changed far easier.
        </p>
      </div>


    `
  }
}

function openModal(serviceType) {
  const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  const data = modalData[serviceType];

  const modal = document.querySelector('coda-modal');
  
  //Add Data
  const header = document.querySelector('.modal-header');
  const subheader = document.querySelector('.modal-subheader');
  const content = document.querySelector('.modal-content');

  header.innerHTML = data.header;
  subheader.innerHTML = data.subHeader || '';
  content.innerHTML = data.content;

  //Set Scroll
  modal.setAttribute('scroll', scrollPosition);
}

document.getElementById('design-button').addEventListener('click', () => {
  openModal('design');
});

document.getElementById('gc-button').addEventListener('click', () => {
  openModal('gc');
});