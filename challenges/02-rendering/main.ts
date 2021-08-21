import { LocationCard, Warning } from '../../components';

import './main.css';
import { Rendering } from './Rendering';

customElements.define('app-location-card', LocationCard);
new Rendering();
new Warning();
