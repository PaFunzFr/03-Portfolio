import { Component } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss',
})
export class HobbiesComponent {
  hobbyPictures = [
    '/assets/img/facts/1.jpg',
    '/assets/img/facts/2.jpg',
    '/assets/img/facts/3.jpg',
  ];

  hobbyIcons = [
    '/assets/img/hobbies/photography.svg',
    '/assets/img/hobbies/cycling.svg',
    '/assets/img/hobbies/dancing.svg',
    '/assets/img/hobbies/metal.svg',
    '/assets/img/hobbies/hiking.svg',
    '/assets/img/hobbies/gaming.svg',
  ];

  clickedButton: string | null = null; // save active item

  setActive(item: string) {
    this.clickedButton = this.clickedButton === item ? null : item; // active or not? if not => set active
  }
}
