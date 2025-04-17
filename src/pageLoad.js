function loadHomePage() {
    const content = document.getElementById('content');
  
    content.innerHTML = '';
  
    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to the Restaurant';
  
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Experience the finest dining with us.';
  
    content.appendChild(heading);
    content.appendChild(paragraph);
  }
  
  export default loadHomePage;
  