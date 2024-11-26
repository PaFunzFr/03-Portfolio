import { Component, HostListener } from '@angular/core';

interface links {
  name: string;
  link: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  links: links[] = [
    { name: 'HOME', link: 'top' },
    { name: 'ABOUT', link: 'about' },
    { name: 'FACTS', link: 'facts' },
    { name: 'SKILLS', link: 'skills' },
    { name: 'PROJECTS', link: 'projects' },
    { name: 'CV', link: 'cv' },
    { name: 'HOBBIES', link: 'hobbies' },
    { name: 'CONTACT', link: 'contact' },
  ];

  // menuButton functionality
  itemOpacity: string = '0';
  itemPosition: string = '100';
  navigationBar: HTMLElement | null = null;

  showMenu() {
    this.itemOpacity = this.itemOpacity === '0' ? '1' : '0';
    this.itemPosition = this.itemOpacity === '0' ? '100' : '0';
  }

  @HostListener('document:click', ['$event'])
  closeMenu(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (
      // if clicking outsite NavBar
      !target.closest('.navigationBar') &&
      !target.closest('.btn_menu') &&
      this.itemOpacity === '1'
    ) {
      // close NavBar
      this.itemOpacity = '0';
      this.itemPosition = '100';
    }
    if (target.closest('.btn_single')) {
      // if clicking button
      setTimeout(() => {
        this.itemOpacity = '0';
        this.itemPosition = '100';
      }, 300); // close NavBar with 300ms delay
    } else {
      // if you do not click close NavBar after
      setTimeout(() => {
        this.itemOpacity = '0';
        this.itemPosition = '100';
      }, 5000); // 5sec
    }
  }
}
