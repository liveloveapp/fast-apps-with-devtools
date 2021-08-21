export class Warning {
  constructor() {
    const el = document.getElementById('warning');
    if (el) {
      setTimeout(() => {
        el.classList.remove('hidden');
      }, 1000);
    }
  }
}
