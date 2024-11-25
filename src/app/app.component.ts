import { Component, HostListener, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';
import { ColorService } from './services/color.service';
import AOS from 'aos'; // inplement animate on scroll library
//import Scrollbar from 'smooth-scrollbar'; 241114

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = '03_Portfolio';

  // get colors from CSS variables using ColorService & initialize them
  constructor(private colorService: ColorService) {}

  ngOnInit() {
    AOS.init({
      // initialize aos library
      offset: 0, // start, if element is X px in viewport
      once: false, // repeat
    });

    // refresh / reload on dynamic resize window
    window.addEventListener('resize', () => {
      window.location.reload();
    });

    // load color variables
    this.colorService.setColors();
  }

  // variables for scroll event
  aboutHeight: number = 0;
  aboutOpacity: number = 0;
  footerOpacity: number = 0;
  aboutScale: number = 1;
  aboutBlur: number = 80;
  hasRevealed: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const scrollInVh = (scrollY / viewportHeight) * 100;

    // calc new height (vh)
    // 100vh = 100% of viewport height
    this.aboutHeight = Math.min(scrollInVh, 100);
    this.aboutOpacity = scrollY / 3000;
    this.aboutScale = Math.min((scrollY / 20) * 0.01, 1);
    this.aboutBlur = Math.max(80 - (scrollY / 200) * 10, 0);

    if (scrollInVh > 260 && !this.hasRevealed) {
      this.hasRevealed = true;
    }
    if (scrollInVh > 700 && this.hasRevealed) {
      this.aboutOpacity = 0;
      this.footerOpacity = 1;
    } else {
      this.footerOpacity = 0;
    }
  }

  // footer Icons
  urlIcons = [
    {
      icon: '/assets/img/footer/github.svg',
      url: 'https://example.com/metal',
    },
    {
      icon: '/assets/img/footer/linkedin.svg',
      url: 'https://example.com/hiking',
    },
    {
      icon: '/assets/img/footer/komoot.svg',
      url: 'https://example.com/gaming',
    },
  ];

  navigateToUrl(path: string) {
    window.open(path, '_blank'); // open in new tab
  }
}
