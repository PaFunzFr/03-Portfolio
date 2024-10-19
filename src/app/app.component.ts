import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '03_Portfolio';
  
  aboutHeight: number = 0; // height : 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY; // current scroll Y position
    const viewportHeight = window.innerHeight; // viewport height

    // calc new height (vh)
    // 100vh = 100% of viewport height
    this.aboutHeight = Math.min(scrollY / viewportHeight * 100, 100);
    // math.min = never bigger than 100 (max height = 100vh)
  }
}
  


