const LOCATIONS = [
  {
    name: 'Kern, Switzerland',
    url: '58uZCE8zrdk',
  },
  {
    name: 'Belluno, Italy',
    url: '5GtS0qbcU0s',
  },
  {
    name: 'Piz La Ila, Italy',
    url: 'G0OnHccvwcA',
  },
  {
    name: 'Bergen, Norway',
    url: 'lE5-z4nTCTQ',
  },
  {
    name: 'Stryn, Norway',
    url: 'DRzpEt8deC4',
  },
  {
    name: 'Gudvangen, Norway',
    url: 'e1sTn8-hGEE',
  },
  {
    name: 'Ballstad, Norway',
    url: '5Gqx11weVJI',
  },
  {
    name: 'Gdansk, Poland',
    url: 'BqsiBCl4rmE',
  },
  {
    name: 'Gdansk, Poland',
    url: 'GZmxOByPubM',
  },
];

export class Rendering {
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

        const card = document.createElement('app-location-card');
        card.setAttribute('url', location.url);

        const name = document.createElement('span');
        name.setAttribute('slot', 'name');
        name.innerHTML = location.name;
        card.appendChild(name);

        el.appendChild(card);
      }, j * 500);
    });
  }
}
