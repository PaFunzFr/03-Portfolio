import { Component } from '@angular/core';

interface Hobby {
  name: string;
  pictures: string[];
  icon: string;
}
@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss',
})
export class HobbiesComponent {
  hobbyPictures: Hobby[] = [
    {
      name: 'photography',
      pictures: [
        '/assets/img/hobbies/photography/1.jpg',
        '/assets/img/hobbies/photography/2.jpg',
        '/assets/img/hobbies/photography/3.jpg',
      ],
      icon: '/assets/img/hobbies/photography.svg',
    },
    {
      name: 'cycling',
      pictures: [
        '/assets/img/hobbies/cycling/1.jpg',
        '/assets/img/hobbies/cycling/2.jpg',
        '/assets/img/hobbies/cycling/3.jpg',
      ],
      icon: '/assets/img/hobbies/cycling.svg',
    },
    {
      name: 'dancing',
      pictures: [
        '/assets/img/hobbies/dancing/1.jpg',
        '/assets/img/hobbies/dancing/2.jpg',
        '/assets/img/hobbies/dancing/3.jpg',
      ],
      icon: '/assets/img/hobbies/dancing.svg',
    },
    {
      name: 'metal',
      pictures: [
        '/assets/img/hobbies/metal/1.jpg',
        '/assets/img/hobbies/metal/2.jpg',
        '/assets/img/hobbies/metal/3.jpg',
      ],
      icon: '/assets/img/hobbies/metal.svg',
    },
    {
      name: 'hiking',
      pictures: [
        '/assets/img/hobbies/hiking/1.jpg',
        '/assets/img/hobbies/hiking/2.jpg',
        '/assets/img/hobbies/hiking/3.jpg',
      ],
      icon: '/assets/img/hobbies/hiking.svg',
    },
    {
      name: 'gaming',
      pictures: [
        '/assets/img/hobbies/gaming/1.jpg',
        '/assets/img/hobbies/gaming/2.jpg',
        '/assets/img/hobbies/gaming/3.jpg',
      ],
      icon: '/assets/img/hobbies/gaming.svg',
    },
  ];

  /* OLD - configured images as initial pictures
  initialPictures: string[] = [
    this.hobbyPictures[1].pictures[0],
    this.hobbyPictures[0].pictures[1],
    this.hobbyPictures[4].pictures[1],
  ];
*/

  // randomize initial pictures
  getRandomUniquePictures(): string[] {
    const allPictures = this.hobbyPictures.flatMap((hobby) => hobby.pictures);
    const selectedPictures: Set<string> = new Set();

    while (selectedPictures.size < 3) {
      const randomIndex = Math.floor(Math.random() * allPictures.length);
      selectedPictures.add(allPictures[randomIndex]);
    }

    return Array.from(selectedPictures); // create new array
  }

  initialPictures: string[] = this.getRandomUniquePictures();

  // define button(s) and its function
  clickedButton: string | null = null; // save active item

  getPicturesByName(hobbyName: string): string[] {
    const hobby = this.hobbyPictures.find((item) => item.name === hobbyName);
    return hobby ? hobby.pictures : []; // if no pictures return empty array
  }

  // picture array definition
  photographyPictures = this.getPicturesByName('photography');
  cyclingPictures = this.getPicturesByName('cycling');
  dancingPictures = this.getPicturesByName('dancing');
  metalPictures = this.getPicturesByName('metal');
  hikingPictures = this.getPicturesByName('hiking');
  gamingPictures = this.getPicturesByName('gaming');

  // click event
  setActive(item: string) {
    this.clickedButton = item;
  }
  get activePictures(): string[] {
    return this.clickedButton
      ? this.getPicturesByName(this.clickedButton)
      : this.initialPictures;
  }
}
