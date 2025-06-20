import { Component } from '@angular/core';
import { words } from '../../../constants';
import { ButtonComponent } from "../../button/button.component";
import { HeroExperience } from '../../hero-models/hero-experience/hero-experience.component';
import { NgtCanvas } from 'angular-three';

@Component({
  selector: 'app-hero',
  imports: [ButtonComponent, NgtCanvas],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  scene = HeroExperience;
 public myWords = words;

}
