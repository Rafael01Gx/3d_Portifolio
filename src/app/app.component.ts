import { Component } from '@angular/core';
import { HeroComponent } from "./components/sections/hero/hero.component";

@Component({
  selector: 'app-root',
  imports: [HeroComponent],
  template: `
  <app-hero />
  `,
})
export class AppComponent {
  title = '3d_Portifolio';
}
