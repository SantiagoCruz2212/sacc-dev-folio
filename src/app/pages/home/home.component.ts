import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule, TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigateToProjects(): void {
    this.router.navigate(['/proyectos']);
  }

  navigateToContact(): void {
    this.router.navigate(['/contacto']);
  }

  frameworks = [
    { name: 'Angular', logo: 'https://cdn.simpleicons.org/angular/DD0031' },
    { name: 'React', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Vue', logo: 'https://cdn.simpleicons.org/vuedotjs/4FC08D' },
    { name: 'Flutter', logo: 'https://cdn.simpleicons.org/flutter/02569B' },
    { name: 'NestJS', logo: 'https://cdn.simpleicons.org/nestjs/E0234E' },
    { name: 'Next.js', logo: 'https://cdn.simpleicons.org/nextdotjs/000000' },
    { name: 'Spring', logo: 'https://cdn.simpleicons.org/spring/6DB33F' }
  ];

  tools = [
    { name: 'GitHub', logo: 'https://cdn.simpleicons.org/github/181717' },
    { name: 'GitLab', logo: 'https://cdn.simpleicons.org/gitlab/FC6D26' },
    { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker/2496ED' },
    { name: 'Jenkins', logo: 'https://cdn.simpleicons.org/jenkins/D24939' },
    { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' }
  ];
}
