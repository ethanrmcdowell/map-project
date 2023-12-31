import { Component } from '@angular/core';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})
export class WorldMapComponent {
  countryName: string | null = null;

  onMouseOver(event: MouseEvent): void {
    if (event.target instanceof SVGPathElement) {
      const countryClass = event.target.getAttribute('class');
      this.countryName = countryClass || null;
    } else {
      this.countryName = null;
    }
  }

  onMouseMove(event: MouseEvent): void {
    if (this.countryName) {
      const tooltipSpan = document.getElementById('details-box');
      if (tooltipSpan) {
        tooltipSpan.style.top = event.clientY + 20 + 'px';
        tooltipSpan.style.left = event.clientX + 'px';
      }
    }
  }

  onMapClick(event: MouseEvent): void {
    const clickedElement = event.target as HTMLElement;
    const elementTitle = clickedElement.getAttribute('title');
    console.log("clicked element:", elementTitle);
  }
}
