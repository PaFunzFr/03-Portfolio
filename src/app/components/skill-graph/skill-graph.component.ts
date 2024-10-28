import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-graph',
  templateUrl: './skill-graph.component.html',
  styleUrl: './skill-graph.component.scss'
})
export class SkillGraphComponent {

  @Input() skillPercentage: string = '';
  @Input() skillCategory: string = '';
  @Input() skillBackground: string = '';
  @Input() skillBorderColor: string = '';
  @Input() skillBorderWidth: string = '';


  
}

