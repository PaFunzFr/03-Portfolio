import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-graph',
  templateUrl: './skill-graph.component.html',
  styleUrl: './skill-graph.component.scss'
})
export class SkillGraphComponent {

  categories = [
    ['95%', 'Design'],
    ['30%', 'Code'],
    ['95%', 'CAD / BIM'],
    ['95%', 'Video'],
  ]

}

