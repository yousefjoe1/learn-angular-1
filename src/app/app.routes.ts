import { Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';

export const routes: Routes = [{
    path: "aboutme",
    // component: AboutmeComponent,
    loadComponent: () => import("./aboutme/aboutme.component").then(m=> m.AboutmeComponent)
}];
