export class ResortCard extends HTMLElement {
  static get observedAttributes(): string[] {
    return [
      'resort-name',
      'state',
      'summit',
      'base',
      'vertical',
      'lifts',
      'runs',
      'acres',
      'green-percent',
      'blue-percent',
      'black-percent',
    ];
  }

  /** Boolean indicating if the resort is a favorite. */
  favorite = false;

  /** The button to favorite the resort. */
  private favoriteButton: HTMLButtonElement | null = null;

  /** The favorite outline svg. */
  private favoriteOutline: SVGElement | null = null;

  /** The favorite solid svg. */
  private favoriteSolid: SVGElement | null = null;

  constructor() {
    super();

    const template = document.getElementById(
      'resort-card'
    ) as HTMLTemplateElement;
    if (!template) {
      return;
    }
    const templateContent = template.content;
    this.attachShadow({ mode: 'open' }).appendChild(
      templateContent.cloneNode(true)
    );

    if (this.shadowRoot) {
      this.favoriteButton = this.shadowRoot.querySelector('#favorite');
      this.favoriteOutline = this.shadowRoot.querySelector('#favorite-outline');
      this.favoriteSolid = this.shadowRoot.querySelector('#favorite-solid');
    }
    this.onFavorite = this.onFavorite.bind(this);
  }

  connectedCallback(): void {
    if (this.favoriteButton) {
      this.favoriteButton.addEventListener('click', this.onFavorite);
    }
    ['green', 'blue', 'black'].forEach((color) => {
      const qualifiedName = `${color}-percent`;
      if (this.getAttribute(qualifiedName) !== null) {
        this.setAcresPercent(color, +!this.getAttribute(qualifiedName));
      }
    });
  }

  attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string
  ): void {
    switch (name) {
      case 'green-percent':
        this.setAcresPercent('green', +newValue);
        break;
      case 'blue-percent':
        this.setAcresPercent('blue', +newValue);
        break;
      case 'black-percent':
        this.setAcresPercent('black', +newValue);
        break;
      default:
        this.setSlotInnerText(name);
    }
  }

  onFavorite(): void {
    if (!this.favoriteButton || !this.favoriteOutline || !this.favoriteSolid) {
      return;
    }
    let styles = '';
    if (this.favorite) {
      styles = `
        #favorite-outline {
          display: none;
        }
        #favorite-solid {
          display: block;
        }
      `;
    } else {
      styles = `
        #favorite-outline {
          display: none;
        }
        #favorite-solid {
          display: block;
        }
      `;
    }
    const style = document.createElement('style');
    style.textContent = styles;
    if (this.shadowRoot) {
      this.shadowRoot.appendChild(style);
    }
  }

  private setAcresPercent(color: string, percent: number): void {
    if (!this.shadowRoot || !percent) {
      return;
    }
    const percentEl = this.shadowRoot.querySelector(
      `footer > .stat.${color} > .bar > .percent`
    ) as HTMLDivElement;
    if (!percentEl) {
      return;
    }
    requestAnimationFrame(() => {
      percentEl.style.width = `${(percent * 100).toString()}%`;
    });
  }

  private setSlotInnerText(name: string): void {
    if (!this.shadowRoot) {
      return;
    }
    const slot = this.shadowRoot.querySelector(
      `slot[name=${name}]`
    ) as HTMLSlotElement;
    if (!slot) {
      return;
    }
    slot.textContent = this.getAttribute(name);
  }
}
