import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app.js';
import swRegister from './utils/sw-register.js';

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
