import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrl: './picture-card.component.scss'
})
export class PictureCardComponent {

  @Input() backgroundImage: string = '';

}
