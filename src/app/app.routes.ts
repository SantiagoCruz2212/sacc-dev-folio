import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ExperienceComponent } from './pages/experience/experience.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: HomeComponent },
  { path: 'proyectos', component: ProjectsComponent },
  { path: 'experiencia', component: ExperienceComponent },
  { path: 'sobre-mi', component: AboutComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '**', redirectTo: '/inicio' }
];
