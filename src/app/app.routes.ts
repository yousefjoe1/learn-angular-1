import { Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';

export const routes: Routes = [
    {
        path: "aboutme",
        pathMatch: "full",
        loadComponent: () => import("./aboutme/aboutme.component").then(m=> m.AboutmeComponent)
    },
    {
    path: "",
    // component: AboutmeComponent,
    loadComponent: () => import("./home/home.component").then(m=> m.HomeComponent)
},

];
