import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ColorService {

  col = {
    blue: {
      b1: '',
      b2: '',
      b3: '',
      b4: '',
      b5: ''
    },
    gold: {
      g1: '',
      g2: '',
      g3: ''
    },
    grey: {
      g1: '',
      g2: '',
      g3: ''
    },
    orange: {
      o1: '',
      o2: ''
    }
  };

    setColors(): void {

      const root = document.documentElement; // = <html> of index.html

      // get styles from index.html / (styles.scss)
      this.col.blue.b1 = getComputedStyle(root).getPropertyValue('--color_blue_1').replace(';', '').trim();
      this.col.blue.b2 = getComputedStyle(root).getPropertyValue('--color_blue_2').replace(';', '').trim();
      this.col.blue.b3 = getComputedStyle(root).getPropertyValue('--color_blue_3').replace(';', '').trim();
      this.col.blue.b4 = getComputedStyle(root).getPropertyValue('--color_blue_4').replace(';', '').trim();
      this.col.blue.b5 = getComputedStyle(root).getPropertyValue('--color_blue_5').replace(';', '').trim();
      
      this.col.gold.g1 = getComputedStyle(root).getPropertyValue('--color_gold_1').replace(';', '').trim();
      this.col.gold.g2 = getComputedStyle(root).getPropertyValue('--color_gold_2').replace(';', '').trim();
      this.col.gold.g3 = getComputedStyle(root).getPropertyValue('--color_gold_3').replace(';', '').trim();
      
      this.col.grey.g1 = getComputedStyle(root).getPropertyValue('--color_grey_1').replace(';', '').trim();
      this.col.grey.g2 = getComputedStyle(root).getPropertyValue('--color_grey_2').replace(';', '').trim();
      this.col.grey.g3 = getComputedStyle(root).getPropertyValue('--color_grey_3').replace(';', '').trim();
      
      this.col.orange.o1 = getComputedStyle(root).getPropertyValue('--color_orange_1').replace(';', '').trim();
      this.col.orange.o2 = getComputedStyle(root).getPropertyValue('--color_orange_2').replace(';', '').trim();
    
    }

  constructor() {
  }

}