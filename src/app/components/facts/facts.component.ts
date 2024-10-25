import { Component} from '@angular/core';

@Component({
  selector: 'app-facts',
  templateUrl: './facts.component.html',
  styleUrl: './facts.component.scss'

})

export class FactsComponent {

  numbers = Array.from({ length: 4 }, (_, i) => i);

  factsPictures = [
    '/assets/img/facts/1.jpg',
    '/assets/img/facts/2.jpg',
    '/assets/img/facts/3.jpg',
    '/assets/img/facts/4.jpg',
  ]
}
