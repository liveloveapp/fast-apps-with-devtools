import './main.css';

const LOCATIONS = [
  {
    id: '58uZCE8zrdk',
    location: 'Kern, Switzerland',
  },
  {
    id: '5GtS0qbcU0s',
    location: 'Belluno, Italy',
  },
  {
    id: 'G0OnHccvwcA',
    location: 'Piz La Ila, Italy',
  },
  {
    id: 'lE5-z4nTCTQ',
    location: 'Bergen, Norway',
  },
  {
    id: 'DRzpEt8deC4',
    location: 'Stryn, Norway',
  },
  {
    id: 'e1sTn8-hGEE',
    location: 'Gudvangen, Norway',
  },
  {
    id: '5Gqx11weVJI',
    location: 'Ballstad, Norway',
  },
  {
    id: 'BqsiBCl4rmE',
    location: 'Gdansk, Poland',
  },
  {
    id: 'GZmxOByPubM',
    location: 'Gdansk, Poland',
  },
];

class Rendering {
  constructor() {
    const btn = document.getElementById('start');
    const content = document.getElementById('content');
    if (btn && content) {
      btn.addEventListener('click', () => {
        this.start(content);
      });
    }
  }

  start(el: HTMLElement): void {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }

    const indices = Array(LOCATIONS.length)
      .fill(null)
      .map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }

    indices.forEach((i, j) => {
      setTimeout(() => {
        const location = LOCATIONS[i];
        el.innerHTML += this.getTemplate(location.id, location.location);
      }, j * 500);
    });
  }

  private getTemplate(id: string, location: string): string {
    return `
      <div class="w-100 mx-2 bg-white rounded-lg overflow-hidden transform-gpu transition hover:scale-105">
          <div class="bg-cover bg-center h-56" style="background-image: url(https://source.unsplash.com/${id}/800x450)"></div>
          <div class="p-4 bg-gray-100 flex justify-between align-center">
            <span class="material-icons text-black"> place </span>
            <p class="uppercase tracking-wide text-sm font-bold text-gray-500">${location}</p>
          </div>
        </div>
    `;
  }
}
new Rendering();

class Warning {
  constructor() {
    const el = document.getElementById('warning');
    if (el) {
      setTimeout(() => {
        el.classList.remove('hidden');
      }, 1000);
    }
  }
}
new Warning();
