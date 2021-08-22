import { ResortCard } from '../../components';
import { Resort, resorts } from '../../data';
import { removeChildNodes } from '../../utils';

import './main.css';

customElements.define('app-resort-card', ResortCard);

const getResortCard = (resort: Resort) => {
  const card = document.createElement('app-resort-card');
  card.setAttribute('resort-name', resort.resort_name);
  card.setAttribute('state', resort.state);
  card.setAttribute('summit', resort.summit.toString());
  card.setAttribute('base', resort.base.toString());
  card.setAttribute('vertical', resort.vertical.toString());
  card.setAttribute('lifts', resort.lifts.toString());
  card.setAttribute('runs', resort.runs.toString());
  card.setAttribute('acres', resort.acres.toString());
  card.setAttribute('green-percent', resort.green_percent.toString());
  card.setAttribute('blue-percent', resort.blue_percent.toString());
  card.setAttribute('black-percent', resort.black_percent.toString());
  return card;
};

const main = document.getElementById('main');
const searchInput = document.getElementById('search') as HTMLInputElement;
const clearBtn = document.getElementById('clear') as HTMLButtonElement;
const showAllBtn = document.getElementById('all') as HTMLButtonElement;

if (main && showAllBtn) {
  showAllBtn.addEventListener('click', () => {
    resorts.forEach((resort) => {
      const resortCard = getResortCard(resort);
      main.appendChild(resortCard);
    });
    if (searchInput) {
      searchInput.value = '';
    }
  });
}

if (main && clearBtn) {
  clearBtn.addEventListener('click', () => {
    removeChildNodes(main);
    if (searchInput) {
      searchInput.value = '';
    }
  });
}

if (main && searchInput) {
  searchInput.addEventListener('keyup', (event) => {
    const target = event.target as HTMLInputElement;
    removeChildNodes(main);
    resorts
      .filter((resort) => {
        const regExp = new RegExp(`${target.value}`, 'i');
        return regExp.test(resort.resort_name) || regExp.test(resort.state);
      })
      .forEach((resort) => {
        const resortCard = getResortCard(resort);
        main.appendChild(resortCard);
      });
  });
}
