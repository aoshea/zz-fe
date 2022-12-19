// Import stylesheets
import './style.css';

const SVG_NS = 'http://www.w3.org/2000/svg';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>ZZ</h1>`;

const artboard = document.querySelector('svg');

interface Vec2D {
  x: number;
  y: number;
}

function getPolygonPoints(n: number, radius: number, centre: Vec2D): string {
  const angle_in_radians = (Math.PI * 2) / n;
  let current_angle = 0;

  const points = [];
  for (let i = 0; i < n; ++i) {
    points.push({
      x: centre.x + Math.cos(current_angle) * radius,
      y: centre.y + Math.sin(current_angle) * radius,
    });
    current_angle += angle_in_radians;
  }

  console.log(points);
  return points.map((p) => `${p.x},${p.y}`).join(' ');
}

function createSVGPolygon(): SVGPolygonElement {
  const polygon = document.createElementNS(SVG_NS, 'polygon');
  polygon.setAttribute('points', getPolygonPoints(7, 10, { x: 50, y: 50 }));
  polygon.setAttribute('fill', 'cornflowerblue');
  polygon.setAttribute('class', 'enter');
  return polygon;
}

const polygon = createSVGPolygon();
artboard.appendChild(polygon);
