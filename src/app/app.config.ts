import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';


import { routes } from './app.routes';
import { provideClientHydration, withIncrementalHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideAnimations() ,provideRouter(routes), provideClientHydration(withIncrementalHydration())]
};
