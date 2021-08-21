export class LocationCard extends HTMLElement {
  static get observedAttributes(): string[] {
    return ['url'];
  }

  /** The url of the location image. */
  set url(value: string | null) {
    if (value === null) {
      this.removeAttribute('url');
      return;
    }
    if (this.shadowRoot) {
      const style = document.createElement('style');
      style.textContent = `
        .bg {
          background-image: url(https://source.unsplash.com/${this.url}/800x450);
        }
      `;
      this.shadowRoot.appendChild(style);
    }
  }
  get url(): string | null {
    return this.getAttribute('url');
  }

  constructor() {
    super();

    const template = document.getElementById(
      'location-card'
    ) as HTMLTemplateElement;
    if (!template) {
      return;
    }
    const templateContent = template.content;
    this.attachShadow({ mode: 'open' }).appendChild(
      templateContent.cloneNode(true)
    );
  }

  attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string
  ): void {
    switch (name) {
      case 'url':
        this.url = newValue;
        break;
    }
  }
}
