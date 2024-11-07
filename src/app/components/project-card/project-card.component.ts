import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {

  @Input() projectImage: string = '';
  @Input() projectTitle: string = '';

  @Input() projectCode: string = '';
  @Input() projectDemo: string = '';

  @Input() usedTool: string = '';

  @Input() usedToolsCount: string = '';

  @Input() displayContent: string = '0';

  showProjectContent() {
    this.displayContent = this.displayContent = '1';
  }

  hideProjectContent() {
    this.displayContent = this.displayContent = '0';
  }

}
