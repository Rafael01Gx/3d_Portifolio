import { parameter, color } from './../../../../../node_modules/@types/three/src/Three.TSL.d';
import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  inject,
  PLATFORM_ID,
  viewChild,
} from '@angular/core';
import { injectBeforeRender } from 'angular-three';
import { extend } from 'angular-three';
import { AmbientLight, BoxGeometry, DirectionalLight, Mesh, MeshStandardMaterial } from 'three';

extend({
  Mesh,
  BoxGeometry,
  AmbientLight,
  MeshStandardMaterial,
  DirectionalLight
});

@Component({
  imports: [],
  template: `
  <ngt-directional-light intensity="1" color="white" [position]="[1,1,1]"/>
    <ngt-ambient-light [intensity]="'0.2'" [color]="'#1a1a40'" />
    <ngt-mesh #mesh>
      <ngt-box-geometry />
      <ngt-mesh-standard-material color="blue" />
    </ngt-mesh>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SceneGraph {
  meshRef = viewChild.required<ElementRef<Mesh>>('mesh');
  platformId = inject(PLATFORM_ID);
  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      injectBeforeRender(() => {
        const mesh = this.meshRef().nativeElement;
      });
    }
  }
}
