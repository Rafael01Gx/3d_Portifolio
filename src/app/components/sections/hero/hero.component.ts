import { Component } from '@angular/core';
import { words } from '../../../constants';
import { ButtonComponent } from "../../button/button.component";
import { SceneGraph } from '../../hero-models/hero-experience/scene-graph.component';
import { NgtCanvas } from 'angular-three';

@Component({
  selector: 'app-hero',
  imports: [ButtonComponent, NgtCanvas],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  scene = SceneGraph;
 public myWords = words;

}
