import { Component, OnInit } from '@angular/core';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {

  ratio: number = 60;

  skillBackground(color1: string, color2: string) {
    return `linear-gradient(to top, ${color1} ${this.ratio}%, ${color2})`;
  }

  constructor(private colorService: ColorService) {}

  categories: Array<{ percentage: string;
                      category: string;
                      border: string;
                      background: string
                    }> = [];

  ngOnInit(): void {

    this.categories = [
      { 
        percentage: '95',
        category: 'Design',
        border: this.colorService.col.blue.b4,
        background: this.skillBackground(this.colorService.col.blue.b1, this.colorService.col.blue.b4)
      },
      { 
        percentage: '30',
        category: 'Code',
        border: this.colorService.col.orange.o2,
        background: this.skillBackground(this.colorService.col.orange.o1, this.colorService.col.orange.o2)
      },
      { percentage: '90',
        category: 'BIM',
        border: this.colorService.col.gold.g2,
        background: this.skillBackground(this.colorService.col.gold.g1, this.colorService.col.gold.g2)
      },
      { percentage: '60',
        category: 'Video',
        border: this.colorService.col.blue.b3,
        background: this.skillBackground(this.colorService.col.blue.b2, this.colorService.col.blue.b3)
      },
    ];
  }


}
