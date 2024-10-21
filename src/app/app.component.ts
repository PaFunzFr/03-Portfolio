import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '03_Portfolio';
  
  aboutHeight: number = 0; 
  aboutOpacity: number = 0;
  aboutScale: number = 1;
  aboutBlur: number = 80;
  mouseOpacity: number = 1;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY; 
    const viewportHeight = window.innerHeight; 

    // calc new height (vh)
    // 100vh = 100% of viewport height
    this.aboutHeight = Math.min(scrollY / viewportHeight * 100, 100);
    this.aboutOpacity = scrollY / 3000;
    this.aboutScale = Math.min(scrollY /20 * 0.01, 1);
    this.aboutBlur = Math.max(80 - (scrollY / 200) * 10, 0);

    if (scrollY > 100) {
        this.mouseOpacity = 0;
    }
    // math.min = never bigger than 100 (max height = 100vh)
  }
}
  


