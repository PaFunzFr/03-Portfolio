import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {

  // project Input
  @Input() projectImage: string = '';
  @Input() projectTitle: string = '';
  @Input() projectCode: string | undefined;
  @Input() projectUrl: string = '';

  // usedTools Input
  @Input() usedTool: string = '';
  @Input() usedToolsCount: string = '';

  // Hover Show project-infos
  displayInfo: string = '0';

  showProjectContent() {
    this.displayInfo = this.displayInfo = '1';
  };
  hideProjectContent() {
    this.displayInfo = this.displayInfo = '0';
  };

}
