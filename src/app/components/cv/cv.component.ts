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
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
      state(
        'hoveredText',
        style({
          opacity: 0,
          transform: 'translateY(-10px)',
        })
      ),
      transition('baseText => hoveredText', [animate('0.3s ease-in')]),
      transition('hoveredText => baseText', [animate('0.3s ease-out')]),
    ]),
    trigger('hoverContent', [
      state(
        'hoveredText',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
      state(
        'baseText',
        style({
          opacity: 0,
          transform: 'translateY(10px)',
        })
      ),
      transition('baseText => hoveredText', [animate('0.3s ease-in')]),
      transition('hoveredText => baseText', [animate('0.3s ease-out')]),
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
