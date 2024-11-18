import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

interface personalInfos {
  category: string;
  content: string;
}
interface timelineAcademic {
  years: string;
  title: string;
}
interface timelineProfessional {
  years: string;
  title: string;
}
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
  animations: [
    trigger('hoverState', [
      state(
        'baseText',
        style({
          transform: 'scale(1)',
          fontWeight: 'thin',
        })
      ),
      state(
        'hoveredText',
        style({
          transform: 'scale(1.1)',
          fontWeight: 'bold',
        })
      ),
      transition('baseText <=> hoveredText', [animate('0.4s linear')]),
    ]),
  ],
})
export class CvComponent {
  personalInfo: personalInfos[] = [
    {
      category: 'NATIONALITY',
      content: 'GERMAN',
    },
    {
      category: 'WORK',
      content: 'REMOTE FIRST',
    },
    {
      category: 'LOCATION',
      content: 'FRANKFURT',
    },
    {
      category: 'LANGUAGES',
      content: 'GER, ENG',
    },
  ];

  // Initialize Base-Text
  state: string[] = new Array(this.personalInfo.length).fill('baseText');

  academic: timelineAcademic[] = [
    {
      years: '2014-2016',
      title: 'M.Sc. Architecture',
    },
    {
      years: '2009-2014',
      title: 'B.Sc. Architecture',
    },
    {
      years: '2009-2009',
      title: 'B.Sc. Informatik',
    },
    {
      years: '2008',
      title: 'Abitur',
    },
  ];

  professional: timelineProfessional[] = [
    {
      years: '2022-2024',
      title: 'BIM Coordination Lead',
    },
    {
      years: '2022-2024',
      title: 'BIM Coordination',
    },
  ];
}
