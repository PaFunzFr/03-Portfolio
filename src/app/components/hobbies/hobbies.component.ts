import { Component } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss'
})
export class HobbiesComponent {
  numbers = Array.from({ length: 4 }, (_, i) => i);

  factsPictures = [
    '/assets/img/facts/1.jpg',
    '/assets/img/facts/2.jpg',
    '/assets/img/facts/3.jpg',
    '/assets/img/facts/4.jpg',
  ];
}

