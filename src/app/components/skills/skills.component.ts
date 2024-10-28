import { Component, OnInit} from '@angular/core';
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
                      borderColor: string;
                      background: string
                      borderWidth: string;
                    }> = [];

  ngOnInit(): void {

    this.categories = [
      { 
        percentage: '95',
        category: 'Design',
        borderColor: this.colorService.col.blue.b4,
        background: this.skillBackground(this.colorService.col.blue.b1, this.colorService.col.blue.b4),
        borderWidth: this.initialborderWith
      },
      { 
        percentage: '30',
        category: 'Code',
        borderColor: this.colorService.col.orange.o2,
        background: this.skillBackground(this.colorService.col.orange.o1, this.colorService.col.orange.o2),
        borderWidth: this.initialborderWith
      },
      { percentage: '90',
        category: 'BIM',
        borderColor: this.colorService.col.gold.g2,
        background: this.skillBackground(this.colorService.col.gold.g1, this.colorService.col.gold.g2),
        borderWidth: this.initialborderWith
      },
      { percentage: '60',
        category: 'Video',
        borderColor: this.colorService.col.blue.b3,
        background: this.skillBackground(this.colorService.col.blue.b2, this.colorService.col.blue.b3),
        borderWidth: this.initialborderWith
      }
    ];

    this.tool_list = this.toolPictures[4].map((image, i) => ({
      image: image,
      name: this.toolNames[4][i],
      background: this.skillBackground(this.colorService.col.grey.g2, this.colorService.col.grey.g2),
      border: this.colorService.col.grey.g2

    }));

  }

  toolPicPath: string = 'assets/img/skills/';

  toolNames = [
    ['Potoshop','Illustrator','InDesign','Lightroom','Figma','Photo','Designer','Publisher'], // Design
    ['HTML','CSS','Javascript','Typescript','Angular','NodeJS','',''], // Code
    ['Revizto','Solibri','Revit','Navisworks','ReCap','ArchiCad','ACC','BIMCollab'], // CAD
    ['DaVinci','FinalCut','Premiere','','','','',''], // Video
    ['','','','','','','',''] // Default

  ];

  toolPictures = [
    // Design Pictures
    [ 
      this.toolPicPath + 'design/1.svg',
      this.toolPicPath + 'design/2.svg',
      this.toolPicPath + 'design/3.svg',
      this.toolPicPath + 'design/4.svg',
      this.toolPicPath + 'design/5.svg',
      this.toolPicPath + 'design/6.svg',
      this.toolPicPath + 'design/7.svg',
      this.toolPicPath + 'design/8.svg'
    ],
    // Code
    [
      this.toolPicPath + 'code/1.svg',
      this.toolPicPath + 'code/2.svg',
      this.toolPicPath + 'code/3.svg',
      this.toolPicPath + 'code/4.svg',
      this.toolPicPath + 'code/5.svg',
      this.toolPicPath + 'code/6.svg',
      '',
      ''
    ],
    // CAD
    [ 
      this.toolPicPath + 'cad/1.svg',
      this.toolPicPath + 'cad/2.svg',
      this.toolPicPath + 'cad/3.svg',
      this.toolPicPath + 'cad/4.svg',
      this.toolPicPath + 'cad/5.svg',
      this.toolPicPath + 'cad/6.svg',
      this.toolPicPath + 'cad/7.svg',
      this.toolPicPath + 'cad/8.svg'
    ],
    // Video
    [
      this.toolPicPath + 'video/1.svg',
      this.toolPicPath + 'video/2.svg',
      this.toolPicPath + 'video/3.svg',
      '',
      '',
      '',
      '',
      ''
    ],
    // Default
    ['','','','','','','',''] 
  ];

  tool_list: { image: string; name: string; background: string; border: string}[] = [];

  initialborderWith: string = 'solid 1pt';
  tool_opacity: number = 1;

  // Hover effect for graph (showing up single tools out of skill category)
  onMouseOver(index_item: number) {
 
    this.categories.forEach(item => item.borderWidth = this.initialborderWith);
    this.categories[index_item].borderWidth= 'solid 2pt';

    this.tool_list = this.toolNames[index_item].map((singleToolName, i) => ({
      image: this.toolPictures[index_item][i],
      name: singleToolName,

      background: this.toolNames[index_item][i] === '' // checking if toolNames existing
      ? this.skillBackground(this.colorService.col.grey.g2, this.colorService.col.grey.g2) // not existing
      : this.categories[index_item].background, // existing 

      border: this.toolNames[index_item][i] === '' 
      ? this.colorService.col.grey.g2 
      : this.categories[index_item].borderColor 

    }));

  }
  


}

