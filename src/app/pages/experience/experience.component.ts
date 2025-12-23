import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CvDownloadService } from '../../shared/services/cv-download.service';

interface Experience {
  id: number;
  key: string; // translation key base path
  technologies: string[];
  isCurrent: boolean;
  icon: string;
}

interface Education {
  id: number;
  key: string; // translation key base path
  type: 'certification' | 'degree' | 'course';
  icon: string;
  iconBgColor: string;
  iconColor?: string;
  link?: string;
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule, TranslateModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  linkedInUrl = 'https://www.linkedin.com/in/santiago-castrocruz/';

  constructor(private cvDownloadService: CvDownloadService) {}

  downloadCV(): void {
    this.cvDownloadService.openToast();
  }

  openLinkedIn(): void {
    window.open(this.linkedInUrl, '_blank');
  }

  experiences: Experience[] = [
    {
      id: 1,
      key: 'experience.jobs.technical-lead',
      technologies: ['React', 'Angular', 'Flutter', 'PrimeNG', 'Tailwind CSS', 'Angular Material', 'Material UI'],
      isCurrent: true,
      icon: 'rocket_launch'
    },
    {
      id: 2,
      key: 'experience.jobs.frontend-dev',
      technologies: ['React', 'Angular', 'Flutter', 'PrimeNG', 'Tailwind CSS', 'Angular Material', 'Material UI'],
      isCurrent: false,
      icon: 'code'
    },
    {
      id: 3,
      key: 'experience.jobs.web-dev-designer',
      technologies: ['Angular', 'React', 'Flutter', 'Next.js', 'Nestjs', 'Spring Tools', 'Adobe XD', 'Figma'],
      isCurrent: false,
      icon: 'design_services'
    },
    {
      id: 4,
      key: 'experience.jobs.software-dev',
      technologies: ['Angular', 'React', 'Angular Material', 'Tailwind CSS'],
      isCurrent: false,
      icon: 'dns'
    }
  ];

  education: Education[] = [
    {
      id: 1,
      key: 'experience.education-items.systems-engineering',
      type: 'degree',
      icon: 'school',
      iconBgColor: '#003865',
      iconColor: 'white'
    },
    {
      id: 2,
      key: 'experience.education-items.angular-frontend',
      type: 'certification',
      icon: 'javascript',
      iconBgColor: '#98ca3f',
      iconColor: 'white',
      link: 'https://platzi.com/p/santiago-andres-castro-cruz/ruta/7045-ruta/diploma/detalle/'
    },
    {
      id: 3,
      key: 'experience.education-items.angular-advanced',
      type: 'certification',
      icon: 'code',
      iconBgColor: '#98ca3f',
      iconColor: 'white',
      link: 'https://platzi.com/p/santiago-andres-castro-cruz/ruta/45-ruta/diploma/detalle/'
    },
    {
      id: 4,
      key: 'experience.education-items.html-css',
      type: 'certification',
      icon: 'web',
      iconBgColor: '#98ca3f',
      iconColor: 'white',
      link: 'https://platzi.com/p/santiago-andres-castro-cruz/ruta/7040-ruta/diploma/detalle/'
    },
    {
      id: 5,
      key: 'experience.education-items.ux-ui',
      type: 'certification',
      icon: 'design_services',
      iconBgColor: '#98ca3f',
      iconColor: 'white',
      link: 'https://platzi.com/p/santiago-andres-castro-cruz/ruta/7768-ruta/diploma/detalle/'
    },
    {
      id: 6,
      key: 'experience.education-items.product-designer',
      type: 'certification',
      icon: 'workspace_premium',
      iconBgColor: '#98ca3f',
      iconColor: 'white',
      link: 'https://platzi.com/p/santiago-andres-castro-cruz/ruta/7769-ruta/diploma/detalle/'
    }
  ];
}
