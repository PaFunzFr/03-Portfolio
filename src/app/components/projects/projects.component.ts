import { Component } from '@angular/core';
import { trigger, state, transition, style, animate, keyframes } from '@angular/animations';

interface projects {
  id: string;
  title: string;
  description?: string;
  image: string;
  about: string;
  code?: string;
}
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',

  animations: [
    trigger('fadeInOut', [
      state('hidden', style({ opacity: 0,
                              maxHeight: '0px',
                              filter: 'blur(10px)',
                              overflow: 'hidden',
                              transform: 'scaleY(0)'
                            })),
      state('shown', style({ opacity: 1,
                             maxHeight: '10000px',
                             filter: 'blur(0px)',
                             transform: 'scaleY(1)',
                            })),
  
      transition('hidden => shown', [
        animate('1000ms ease', keyframes([
          style({ opacity: 0,
                  maxHeight: '0px',
                  filter: 'blur(10px)',
                  transform: 'scaleY(0)',               
                  offset: 0
                }),
          style({ opacity: 0.2,
                  maxHeight: '5000px',
                  filter: 'blur(6px)',
                  transform: 'scaleY(0.5)', 
                  offset: 0.5
                }),
          style({ opacity: 1,
                  maxHeight: '10000px',
                  filter: 'blur(0px)',
                  transform: 'scaleY(1)', 
                  offset: 1 
                })
        ]))
      ]),
  
      transition('shown => hidden', [
        animate('1000ms ease', keyframes([
          style({ opacity: 1,
                  maxHeight: '10000px',
                  transform: 'scaleY(1)',   
                  offset: 0
                }),
          style({ opacity: 0,
                  maxHeight: '200px',
                  filter: 'blur(6px)',
                  transform: 'scaleY(0.5)',   
                  offset: 0.5
                }),
          style({ opacity: 0,
                  maxHeight: '0px',
                  filter: 'blur(10px)',
                  transform: 'scaleY(0)',   
                  offset: 1
                })
        ]))
      ])
    ])
  ]

})

export class ProjectsComponent {

allProjects: projects[] = [
  { 
    id: 'arc.001',
    title: 'Terminal 3',
    image: '/assets/img/projects/airport.png',
    about: 'https://www.dreso.com/lu/en/projects/details/fraport-terminal-3-frankfurt'
  },
  { 
    id: 'arc.002',
    title: 'IX FRA18-22',
    image: '/assets/img/projects/datacenter.png',
    about: 'https://www.dreso.com/de/aktuelles/details/neckermann-versandzentrale-aus-den-1960ern-wird-zum-colocation-rechenzentrum'
  },
  { 
    id: 'arc.003',
    title: 'Marienturm',
    image: '/assets/img/projects/soccer.png',
    about: 'https://djh-architekten.de/referenzen/detail/marienturm'
  },
  { 
    id: 'arc.004',
    title: 'DFB Campus',
    image: '/assets/img/projects/tower.png',
    about: 'https://djh-architekten.de/referenzen/detail/dfb-campus'
  },
  { 
    id: 'dev.001',
    title: 'Portfolio',
    image: '/assets/img/projects/coding.png',
    about: 'https://github.com/example/project1',
    code: 'https://github.com/PaFunzFr'
  },
  { 
    id: 'dev.002',
    title: 'StePat',
    image: '/assets/img/projects/coding.png',
    about: 'https://github.com/example/project1'
  },
  { 
    id: 'dev.003',
    title: 'First Attempt',
    image: '/assets/img/projects/coding.png',
    about: 'https://github.com/example/project1'
  },
  { 
    id: 'dev.004',
    title: 'HulCinator',
    image: '/assets/img/projects/coding.png',
    about: 'https://github.com/example/project1'
  },
  { 
    id: 'dev.004',
    title: 'HulCinator',
    image: '/assets/img/projects/coding.png',
    about: 'https://github.com/example/project1'
  },
  { 
    id: 'dev.004',
    title: 'HulCinator',
    image: '/assets/img/projects/coding.png',
    about: 'https://github.com/example/project1'
  },
  { 
    id: 'dev.004',
    title: 'HulCinator',
    image: '/assets/img/projects/coding.png',
    about: 'https://github.com/example/project1'
  },
  { 
    id: 'dev.004',
    title: 'HulCinator',
    image: '/assets/img/projects/coding.png',
    about: 'https://github.com/example/project1'
  },
  { 
    id: 'dev.004',
    title: 'HulCinator',
    image: '/assets/img/projects/coding.png',
    about: 'https://github.com/example/project1'
  },
]

sortedProjects: projects[] = [];

constructor() {
  this.sortProjects();
}

sortProjects() {

  const devProjects = this.allProjects.filter(p => p.id.startsWith('dev')).sort((a, b) => a.id.localeCompare(b.id));
  const arcProjects = this.allProjects.filter(p => p.id.startsWith('arc')).sort((a, b) => a.id.localeCompare(b.id));
  
  let i = 0;

  while (i < devProjects.length || i < arcProjects.length) {

    if (i < devProjects.length) {
      this.sortedProjects.push(devProjects[i]);
    }
    if (i < arcProjects.length) {
      this.sortedProjects.push(arcProjects[i]);
    }
    i++;
  }
}

get initialProjects(): projects[] {
  return this.sortedProjects.slice(0, 6);
}

get moreProjects(): projects[] {
  return this.sortedProjects.slice(6);
}

// toogle Show All / Less Button
state: string = 'hidden'; 
  toggleState() {
    this.state = this.state === 'hidden' ? 'shown' : 'hidden'; 
  }
}
