import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  leftClip: number = 50;
  rightClip: number = 50;
  transformX: number = 0;

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const positionX = event.clientX; 
    const windowWidth = window.innerWidth; 

    const mouseXPercentage = (positionX / windowWidth) * 100;

    if (mouseXPercentage < 50) {
        this.leftClip = mouseXPercentage; 
        this.rightClip = 100 - this.leftClip;
        this.transformX = mouseXPercentage * -0.25;
    } else {
        this.rightClip = 100 - mouseXPercentage;
        this.leftClip = 100 - this.rightClip;
        this.transformX = mouseXPercentage * -0.25;
    }
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave() {
    this.resetClips();
  }

  resetClips() {
    this.leftClip = 50;
    this.rightClip = 50;
    this.transformX = 0;
  }

}
