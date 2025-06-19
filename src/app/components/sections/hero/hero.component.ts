import { Component } from '@angular/core';
import { words } from '../../../constants';
import { ButtonComponent } from "../../button/button.component";
import { HeroExperienceComponent } from '../../hero-models/hero-experience/hero-experience.component';

@Component({
  selector: 'app-hero',
  imports: [ButtonComponent, HeroExperienceComponent],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
 public myWords = words;

}
