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
      title: 'Senior Fullstack Developer',
      company: 'TechCorp Solutions',
      period: 'Ene 2021 - Presente',
      description: 'Liderazgo técnico en la migración de arquitectura monolítica a microservicios. Implementación de CI/CD pipelines que redujeron el tiempo de despliegue en un 40%. Mentoria a desarrolladores junior y code reviews.',
      technologies: ['React', 'Node.js', 'AWS', 'Docker'],
      isCurrent: true,
      icon: 'rocket_launch'
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'StartupX Innovations',
      period: 'Jun 2018 - Dic 2020',
      description: 'Desarrollo de APIs RESTful de alto rendimiento. Optimización de consultas PostgreSQL para manejar grandes volúmenes de datos. Integración de pasarelas de pago y sistemas de autenticación OAuth2.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Redis'],
      isCurrent: false,
      icon: 'dns'
    },
    {
      id: 3,
      title: 'Junior Web Developer',
      company: 'Creative Agency',
      period: 'Ene 2017 - May 2018',
      description: 'Maquetación de sitios web responsive utilizando HTML5, CSS3 y JavaScript vanilla. Colaboración con diseñadores UI/UX para asegurar la fidelidad visual. Mantenimiento de sitios WordPress.',
      technologies: ['HTML/CSS', 'JavaScript', 'SASS', 'Git'],
      isCurrent: false,
      icon: 'code'
    }
  ];

  education: Education[] = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      institution: 'Amazon Web Services',
      date: 'Emitido: Oct 2022 • Expira: Oct 2025',
      type: 'certification',
      icon: 'cloud',
      iconBgColor: '#232f3e',
      iconColor: '#FF9900',
      credentialId: 'AWS-12345678',
      link: '#'
    },
    {
      id: 2,
      title: 'Ingeniería en Sistemas Computacionales',
      institution: 'Universidad Tecnológica Nacional',
      date: 'Graduado con Honores • 2013 - 2017',
      type: 'degree',
      icon: 'school',
      iconBgColor: '#003865',
      iconColor: 'white',
      status: 'Completado'
    },
    {
      id: 3,
      title: 'Escuela de JavaScript',
      institution: 'Platzi',
      date: 'Emitido: Feb 2021 • Sin expiración',
      type: 'course',
      icon: 'javascript',
      iconBgColor: '#98ca3f',
      iconColor: 'white',
      link: '#'
    }
  ];
}
