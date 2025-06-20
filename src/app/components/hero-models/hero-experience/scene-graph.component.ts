import { OrbitControls } from 'three-stdlib';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { extend, injectStore ,NgtArgs} from 'angular-three';
import {
  AmbientLight,
  BoxGeometry,
  DirectionalLight,
  Mesh,
  MeshStandardMaterial,
} from 'three';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { isPlatformBrowser } from '@angular/common';

extend({
  Mesh,
  BoxGeometry,
  AmbientLight,
  MeshStandardMaterial,
  DirectionalLight,
  OrbitControls,
});

@Component({
  selector: 'app-scene-graph',
  imports: [NgtArgs],
  template: `
   
   <ngt-ambient-light [intensity]="'0.2'" [color]="'#1a1a40'" />
     <ngt-directional-light intensity="5" color="white" [position]="[1, 1, 1]" />
   <ngt-orbit-controls
      [enablePan]="false"
      [enableZoom]="(!isTablet())"
      [maxDistance]="20"
      [minDistance]="5"
      [minPolarAngle]="minPolarAngle"
      [maxPolarAngle]="maxPolarAngle"

      *args="[camera(), glDomElement()]"
    /> 
    <ngt-mesh #mesh>
      <ngt-box-geometry />
      <ngt-mesh-standard-material color="teal" />
    </ngt-mesh>
 
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SceneGraph implements AfterViewInit {
  #breakpointObserver= inject (BreakpointObserver);
  #platformId= inject (PLATFORM_ID);
  minPolarAngle= Math.PI / 5;
  maxPolarAngle= Math.PI / 2;
  private store = injectStore();
  camera = this.store.select('camera');
  glDomElement = this.store.select('gl','domElement');
  isMobile = signal(false);
  isTablet = signal(true);

  

  ngAfterViewInit(): void {
if(isPlatformBrowser(this.#platformId)){
      this.#breakpointObserver.observe([
      '(max-width: 768px)',
      '(max-width: 1024px)',
    ]).subscribe(result => {
      const breakpoints = result.breakpoints;
  
      this.isMobile.update(()=> breakpoints['(max-width: 768px)'])
      this.isTablet.update(()=> breakpoints['(max-width: 1024px)'])
      console.log( this.isTablet());
    });
}
  }

}
