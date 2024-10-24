import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
// FARBEN ANPASSEN 241024!!!
  skillColor_Design_1: string ='rgba(46, 130, 160, 1)';
  skillColor_Design_2: string ='rgba(46, 130, 160, 1)';

  skillColor_Code_1: string ='rgba(238, 140, 27, 1)';
  skillColor_Code_2: string ='rgba(238, 140, 27, 1)';

  skillColor_Bim_1: string ='rgba(177, 140, 97, 1)';
  skillColor_Bim_2: string ='rgba(177, 140, 97, 1)';

  skillColor_Video_1: string ='rgba(23, 30, 41, 1)';
  skillColor_Video_2: string ='rgba(23, 30, 41, 1)';
// FARBEN ANPASSEN 241024!!!

  skillBackground_Design: string ='linear-gradient(to top,' + this.skillColor_Design_1 + ',' + this.skillColor_Design_2 +')';
  skillBackground_Code: string ='linear-gradient(to top,' + this.skillColor_Design_1 + ',' + this.skillColor_Design_2 +')';
  skillBackground_Bim: string ='linear-gradient(to top,' + this.skillColor_Design_1 + ',' + this.skillColor_Design_2 +')';
  skillBackground_Video: string ='linear-gradient(to top,' + this.skillColor_Design_1 + ',' + this.skillColor_Design_2 +')';



  categories = [
    ['95', 'Design',this.skillColor_Design_1, this.skillBackground_Design],
    ['30', 'Code',this.skillColor_Code_1, this.skillBackground_Code],
    ['90', 'BIM',this.skillColor_Bim_1, this.skillBackground_Bim],
    ['60', 'Video',this.skillColor_Video_1, this.skillBackground_Video],
  ]

}
