import { Component, HostListener} from '@angular/core';
import ScrollReveal from 'scrollreveal';

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
  hasRevealed: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY; 
    const viewportHeight = window.innerHeight; 
    const scrollInVh = scrollY / viewportHeight * 100;

    // calc new height (vh)
    // 100vh = 100% of viewport height
    this.aboutHeight = Math.min(scrollInVh, 100);
    this.aboutOpacity = scrollY / 3000;
    this.aboutScale = Math.min(scrollY /20 * 0.01, 1);
    this.aboutBlur = Math.max(80 - (scrollY / 200) * 10, 0);

    if (scrollInVh > 260 && !this.hasRevealed) {
      this.triggerScrollReveal(); 
      this.hasRevealed = true; 
    }
    // math.min = never bigger than 100 (max height = 100vh)
  }
  triggerScrollReveal() {

    ScrollReveal().reveal('.scroll-text', {
      delay: 100,
      distance: '100px',
      origin: 'top',
      duration: 1000,
      opacity: 0,
      easing: 'ease-out'
    })
  }
}



