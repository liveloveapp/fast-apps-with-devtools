import { Dialog } from '../../components';
import './main.css';

customElements.define('app-dialog', Dialog);

const dialog = document.querySelector('app-dialog') as Dialog;

const openBtn = document.getElementById('open');
if (openBtn) {
  openBtn.addEventListener('click', () => dialog.open());
}

const toggleBtn = document.getElementById('toggle');
const refresh = document.getElementById('refresh');
if (toggleBtn && refresh) {
  toggleBtn.addEventListener('click', () => {
    refresh.classList.toggle('animate-spin');
  });
}
