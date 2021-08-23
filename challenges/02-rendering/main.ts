import { LocationCard, Warning } from '../../components';

import './main.css';
import { Rendering } from './Rendering';

customElements.define('app-location-card', LocationCard);
new Rendering();
new Warning();

class Touch {
  private boundOnTouchMove = this.onTouchMove.bind(this);
  private readonly images: NodeListOf<HTMLImageElement> | null = null;

  constructor() {
    this.images = document.querySelectorAll('img');
    this.images.forEach((img) => {
      img.addEventListener('touchmove', this.boundOnTouchMove);
    });
  }

  destroy(): void {
    if (this.images === null) {
      return;
    }
    this.images.forEach((img) => {
      img.removeEventListener('touchmove', this.boundOnTouchMove);
    });
  }

  private fibonacci(num: number): number {
    if (num <= 1) return 1;
    return this.fibonacci(num - 1) + this.fibonacci(num - 2);
  }

  private onTouchMove(event: TouchEvent): void {
    // event.preventDefault();
    this.fibonacci(35);
    console.log('touchmove');
  }
}
new Touch();

class Zoom {
  private boundOnZoom = this.onZoom.bind(this);
  private scale = 1;

  constructor(private readonly el: HTMLElement) {
    this.el.addEventListener('wheel', this.boundOnZoom);
  }

  destroy(): void {
    this.el.removeEventListener('wheel', this.boundOnZoom);
  }

  private onZoom(event: WheelEvent): void {
    event.preventDefault();
    this.scale += event.deltaY * -0.01;
    this.scale = Math.min(Math.max(0.125, this.scale), 4);
    this.el.style.transform = `scale(${this.scale})`;
  }
}
const start = document.getElementById('start');
if (start) {
  new Zoom(start);
}
