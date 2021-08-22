export class Dialog extends HTMLElement {
  /** The button to close the dialog. */
  private closeButton: HTMLButtonElement | null = null;

  constructor() {
    super();

    const template = document.getElementById('dialog') as HTMLTemplateElement;
    if (!template) {
      return;
    }
    const templateContent = template.content;
    this.attachShadow({ mode: 'open' }).appendChild(
      templateContent.cloneNode(true)
    );

    if (this.shadowRoot) {
      this.closeButton = this.shadowRoot.querySelector('#close');
    }
    this.onClose = this.onClose.bind(this);
  }

  connectedCallback(): void {
    if (this.closeButton) {
      this.closeButton.addEventListener('click', this.onClose);
    }
  }

  disconnectedCallback(): void {
    if (this.closeButton) {
      this.closeButton.removeEventListener('click', this.onClose);
    }
  }

  open(): void {
    const style = document.createElement('style');
    style.textContent = `
      :host {
        visibility: visible;
      }
    `;
    if (this.shadowRoot) {
      this.shadowRoot.appendChild(style);
    }
  }

  private onClose(): void {
    const style = document.createElement('style');
    style.textContent = `
      :host {
        visibility: hidden;
      }
    `;
    if (this.shadowRoot) {
      this.shadowRoot.appendChild(style);
    }
  }
}
