import loadHomePage from './pageLoad';
import loadMenuPage from './menu';
import loadAboutPage from './about';
document.addEventListener('DOMContentLoaded', () => {
    const homeBtn = document.getElementById('home-btn');
    const menuBtn = document.getElementById('menu-btn');
    const aboutBtn = document.getElementById('about-btn');
    homeBtn.addEventListener('click', loadHomePage);
  menuBtn.addEventListener('click', loadMenuPage);
  contactBtn.addEventListener('click', loadContactPage);
  loadHomePage();
});
