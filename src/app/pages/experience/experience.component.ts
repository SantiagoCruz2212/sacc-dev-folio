import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvDownloadService } from '../../shared/services/cv-download.service';

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  isCurrent: boolean;
  icon: string;
}

interface Education {
  id: number;
  title: string;
  institution: string;
  date: string;
  type: 'certification' | 'degree' | 'course';
  icon: string;
  iconBgColor: string;
  iconColor?: string;
  credential?: string;
  credentialId?: string;
  status?: string;
  link?: string;
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
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
      title: 'Líder Técnico',
      company: 'Codesa',
      period: 'Dic 2024 - Nov 2025',
      description: 'Liderazgo al equipo en la resolución de problemas críticos en el sistema central biométrico, asegurando el funcionamiento del sistema. Planificación y dirección del desarrollo de nuevas arquitecturas para sistemas/aplicativos, mejorando la escalabilidad, seguridad y modularidad. Implementación de micro-frontends para aplicaciones escalables y mantenibles, diseñando componentes reutilizables.',
      technologies: ['React', 'Angular', 'Flutter', 'PrimeNG', 'Tailwind CSS', 'Angular Material', 'Material UI'],
      isCurrent: true,
      icon: 'rocket_launch'
    },
    {
      id: 2,
      title: 'Desarrollador Frontend',
      company: 'Codesa',
      period: 'Jul 2023 - Nov 2025',
      description: 'Creación y optimización de interfaces de usuario responsive con React, Angular y Flutter, utilizando librerías como PrimeNG, Tailwind CSS, Angular Material, Material UI. Implementación de micro-frontends para aplicaciones escalables y mantenibles, diseñando componentes reutilizables. Liderazgo en la implementación de buenas prácticas de seguridad, asegurando el cumplimiento de los estándares de la industria.',
      technologies: ['React', 'Angular', 'Flutter', 'PrimeNG', 'Tailwind CSS', 'Angular Material', 'Material UI'],
      isCurrent: false,
      icon: 'code'
    },
    {
      id: 3,
      title: 'Desarrollador/Diseñador web',
      company: 'Freelance',
      period: 'Mar 2023 - Ene 2024',
      description: 'Realización de análisis de mercado para identificar oportunidades de mejora y generación de valor. Diseño de interfaces web y móviles intuitivas, enfocadas en la usabilidad y la experiencia del usuario, basadas en los análisis de requerimientos. Desarrollo integral de aplicaciones web, desde la arquitectura hasta la implementación, para soluciones escalables.',
      technologies: ['Angular', 'React', 'Flutter', 'Next.js', 'Nestjs', 'Spring Tools', 'Adobe XD', 'Figma'],
      isCurrent: false,
      icon: 'design_services'
    },
    {
      id: 4,
      title: 'Desarrollador de Software',
      company: 'Optima Corporation',
      period: 'Mar 2021 - Mar 2023',
      description: 'Desarrollo de aplicativos web con Angular y React, utilizando librerías Angular Material, Tailwind CSS. Participación en todas las etapas de los proyectos desde el análisis de requerimientos hasta la implementación y despliegue. Diseñador de los aplicativos/productos para aplicar mejoras en la usabilidad y experiencia del usuario.',
      technologies: ['Angular', 'React', 'Angular Material', 'Tailwind CSS'],
      isCurrent: false,
      icon: 'dns'
    }
  ];

  education: Education[] = [
    {
      id: 1,
      title: 'Ingeniería de Sistemas',
      institution: 'Universidad Santiago de Cali (USC)',
      date: '2017B - 2026A',
      type: 'degree',
      icon: 'school',
      iconBgColor: '#003865',
      iconColor: 'white',
      status: 'Proceso de grado'
    },
    {
      id: 2,
      title: 'Frontend con Angular',
      institution: 'Platzi Academy',
      date: 'Aprobado: 27 Enero, 2023 • Sin expiración',
      type: 'certification',
      icon: 'javascript',
      iconBgColor: '#98ca3f',
      iconColor: 'white',
      link: 'https://platzi.com/p/santiago-andres-castro-cruz/ruta/7045-ruta/diploma/detalle/'
    },
    {
      id: 3,
      title: 'Frontend a profundidad con Angular',
      institution: 'Platzi Academy',
      date: 'Aprobado: 31 Enero, 2023 • Sin expiración',
      type: 'certification',
      icon: 'code',
      iconBgColor: '#98ca3f',
      iconColor: 'white',
      link: 'https://platzi.com/p/santiago-andres-castro-cruz/ruta/45-ruta/diploma/detalle/'
    },
    {
      id: 4,
      title: 'HTML y CSS desde cero',
      institution: 'Platzi Academy',
      date: 'Aprobado: 2 Febrero, 2023 • Sin expiración',
      type: 'certification',
      icon: 'web',
      iconBgColor: '#98ca3f',
      iconColor: 'white',
      link: 'https://platzi.com/p/santiago-andres-castro-cruz/ruta/7040-ruta/diploma/detalle/'
    },
    {
      id: 5,
      title: 'Trabaja como UX/UI Designer',
      institution: 'Platzi Academy',
      date: 'Aprobado: 6 Febrero, 2023 • Sin expiración',
      type: 'certification',
      icon: 'design_services',
      iconBgColor: '#98ca3f',
      iconColor: 'white',
      link: 'https://platzi.com/p/santiago-andres-castro-cruz/ruta/7768-ruta/diploma/detalle/'
    },
    {
      id: 6,
      title: 'Product Designer',
      institution: 'Platzi Academy',
      date: 'Aprobado: 23 Febrero, 2023 • Sin expiración',
      type: 'certification',
      icon: 'workspace_premium',
      iconBgColor: '#98ca3f',
      iconColor: 'white',
      link: 'https://platzi.com/p/santiago-andres-castro-cruz/ruta/7769-ruta/diploma/detalle/'
    }
  ];
}
