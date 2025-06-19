import { Component } from '@angular/core';
import { words } from '../../../constants';
import { ButtonComponent } from "../../button/button.component";

@Component({
  selector: 'app-hero',
  imports: [ButtonComponent],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
 public myWords = words;

}
