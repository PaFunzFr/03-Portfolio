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
    // <span> no. 1
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
          transform: 'translateY(-100%)',
        })
      ),
      transition('baseText => hoveredText', [animate('0.4s 0.2s ease-in')]), // duration 0.4s delay 0.2s
      transition('hoveredText => baseText', [animate('0.4s ease-out')]),
    ]),
    // <span> no. 2
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
          transform: 'translateY(100%)',
        })
      ),
      transition('baseText => hoveredText', [animate('0.4s 0.2s ease-in')]), // duration 0.4s delay 0.2s
      transition('hoveredText => baseText', [animate('0.4s ease-out')]),
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
      category: 'WORK MODE',
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
      years: '2020-2024',
      title: 'BIM Coordination',
    },
    {
      years: '2016-2020',
      title: 'Planer, BIM Coordination',
    },
    {
      years: '2015-2016',
      title: 'Planer',
    },
    {
      years: '2014-2016',
      title: 'Tutor statische Systeme',
    },
  ];
}
