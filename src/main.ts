import './style.css';
import {} from './index';
import { loadTileset } from './VirtualTree/index';

const app = document.querySelector<HTMLDivElement>('#app')!;

const canvas = document.createElement('canvas');
canvas.setAttribute('id', 'scene');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

loadTileset();
