import { SceneGraph } from './scene-graph.component';
import { Component } from '@angular/core';
import { NgtCanvas } from 'angular-three';

@Component({
  selector: 'app-hero-experience',
  imports: [NgtCanvas],
  template: ` <ngt-canvas [sceneGraph]="sceneGraph" /> 
  <!-- [camera]="{position:[0,0,15], fov:45 }" -->
  `,

})
export class HeroExperienceComponent {
  protected sceneGraph = SceneGraph;
}
