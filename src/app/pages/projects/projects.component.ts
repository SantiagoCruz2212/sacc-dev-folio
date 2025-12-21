import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  category: 'Full Stack' | 'Frontend' | 'Backend';
  image: string;
  technologies: string[];
  delay: number;
  detailedDescription: string[];
  detailedTechnologies: string[];
  date: string;
  repoUrl: string;
  demoUrl: string;
  detailImage: string;
}

interface Filter {
  id: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  selectedFilter: string = 'Todos';
  selectedProject: Project | null = null;
  isModalOpen: boolean = false;

  filters: Filter[] = [
    { id: 'Todos', label: 'Todos', icon: 'grid_view' },
    { id: 'Frontend', label: 'Frontend', icon: 'desktop_windows' },
    { id: 'Backend', label: 'Backend', icon: 'database' },
    { id: 'Full Stack', label: 'Full Stack', icon: 'layers' }
  ];

  projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Dashboard',
      description: 'Plataforma integral para la gestión de inventario, análisis de ventas en tiempo real y gestión de usuarios.',
      category: 'Full Stack',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRcpjMcI-QixL4zE_RiV4LbQITzId7MlhgdV7fLhMSVEsZy2dbfZCKFoKGt7_DRTA0-rxaQapIKWqLAosC7wHypkw1OEHS-lgn2iSmNwqJAzsryw9UUJQioBw_CYUonZOMvaeZo7OT4aVHyzuDIL8siKfd9vXz0tbrYsGu-nWOZt8OWS0f7IsFKCB_3gAPPjEGzLb7vehmtSwdJzl05yjDbxlA1tZc-pAUhxtS00OXgCHrVrZ5ivQIEDWjSbINUf9sg_kjYrxz6iM',
      technologies: ['React', 'Node.js', 'MongoDB'],
      delay: 300,
      detailedDescription: [
        'Una solución completa diseñada para pequeñas y medianas empresas. Este dashboard permite a los administradores visualizar métricas clave de rendimiento, gestionar el inventario en múltiples almacenes y procesar pedidos en tiempo real.',
        'El sistema incluye autenticación basada en roles, exportación de reportes a PDF/CSV y un modo oscuro nativo.'
      ],
      detailedTechnologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      date: 'Oct 2023',
      repoUrl: 'https://github.com/usuario/ecommerce-dashboard',
      demoUrl: 'https://ecommerce-dashboard-demo.com',
      detailImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGFdrsXqVXP4PAY9yUCH1NkiA3BSw0h1VPQKEenKt16-wA6-7g4bpvohI-7OXvFOmsRNo12MS8HU255hhLSz-k4ro4EvIYuTSHfWb6b293M_QG9mJuIi6XZRlYte7_4risIgxSyN_GJAGEXAfyJ5aO-5t53FsZDdd0hX1_B6ln4Enn8XesWPbNfoiF15oJb4U3kCiomWgF866bnfNH3m17jFxoFKBJEtt5eXn0XF0Vo6qh0WlXjLYjS0qISZJxZVILKEafIrIdbAw'
    },
    {
      id: 2,
      title: 'TaskFlow App',
      description: 'Aplicación de productividad minimalista con soporte para drag-and-drop y sincronización offline.',
      category: 'Frontend',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQYJUvE0TyYKqymCyEcriDdPoAC0EQTzhqGh6eg6b2-dBVPyZwHTEu_vomhOUlXHo0GYrutDgU07aMfTzfb1GowmSMmyvEa8udz0wDNvrQc-9xouzxn7ApbqislCKH5RXMtjdSeuotZGe6tvZAz7ThF3mBPGDhQNnbGdlplGgV0VsOUGzyo-gtUSdc5SbvpdKw8nsRECMgkd_9UH8tMGk-KR45YecqQkU2S5DxVTfH6saUejqbi9n-et0-gbpDI8hjp_FCRhzEtUw',
      technologies: ['Vue 3', 'Firebase', 'PWA'],
      delay: 400,
      detailedDescription: [
        'Aplicación web progresiva diseñada para maximizar la productividad personal y de equipos.',
        'Incluye funcionalidad de arrastrar y soltar, sincronización en tiempo real y capacidad offline completa.'
      ],
      detailedTechnologies: ['Vue 3', 'Composition API', 'Firebase Firestore', 'PWA', 'Vuex'],
      date: 'Sep 2023',
      repoUrl: 'https://github.com/usuario/taskflow-app',
      demoUrl: 'https://taskflow-demo.com',
      detailImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQYJUvE0TyYKqymCyEcriDdPoAC0EQTzhqGh6eg6b2-dBVPyZwHTEu_vomhOUlXHo0GYrutDgU07aMfTzfb1GowmSMmyvEa8udz0wDNvrQc-9xouzxn7ApbqislCKH5RXMtjdSeuotZGe6tvZAz7ThF3mBPGDhQNnbGdlplGgV0VsOUGzyo-gtUSdc5SbvpdKw8nsRECMgkd_9UH8tMGk-KR45YecqQkU2S5DxVTfH6saUejqbi9n-et0-gbpDI8hjp_FCRhzEtUw'
    },
    {
      id: 3,
      title: 'FinTech API Node',
      description: 'API RESTful segura para procesamiento de transacciones bancarias con arquitectura de microservicios.',
      category: 'Backend',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBP6aArAfbDIp3evwN5iYZr9DG6QX2zNB2JqnSBm9gB3HhAigt8sJEA673C-0xPOQWyYJEK7bK51Vw2KLY33_smK7ACauvmBganzsHO0wBWvZCEy-lVCg5kkH8PqVbNThfD_uupi-R5Op5_xsXZH3vhne3aL4MhjD9BTcg0ac9cLtOMEBLKZgU_goZxIr-f_qQSFzqFx1MCl81UoblKyjX06X5JiUiRJoPOVEBpPSzlezDOiilftABdmq1dm6Go6bdYWBSTCD7XXV4',
      technologies: ['NestJS', 'PostgreSQL', 'Docker'],
      delay: 500,
      detailedDescription: [
        'API backend robusta para procesamiento de transacciones financieras con arquitectura de microservicios.',
        'Implementa estándares de seguridad bancaria, encriptación de extremo a extremo y auditoría completa.'
      ],
      detailedTechnologies: ['NestJS', 'PostgreSQL', 'Docker', 'Redis', 'JWT'],
      date: 'Ago 2023',
      repoUrl: 'https://github.com/usuario/fintech-api',
      demoUrl: 'https://fintech-api-docs.com',
      detailImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBP6aArAfbDIp3evwN5iYZr9DG6QX2zNB2JqnSBm9gB3HhAigt8sJEA673C-0xPOQWyYJEK7bK51Vw2KLY33_smK7ACauvmBganzsHO0wBWvZCEy-lVCg5kkH8PqVbNThfD_uupi-R5Op5_xsXZH3vhne3aL4MhjD9BTcg0ac9cLtOMEBLKZgU_goZxIr-f_qQSFzqFx1MCl81UoblKyjX06X5JiUiRJoPOVEBpPSzlezDOiilftABdmq1dm6Go6bdYWBSTCD7XXV4'
    },
    {
      id: 4,
      title: 'Corporate Landing',
      description: 'Sitio web corporativo de alto rendimiento con animaciones GSAP y optimización SEO avanzada.',
      category: 'Frontend',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwIEBqCLDjUmd-lkbSqhm7KpOcJkbNoMFbdq_D-cJQ_J3g4Cz7coKAxI2SQJqrRLLyOnDVl64w7d8HKLbFqtT4MvPeVUn_X4JkmKShWDmGPLu2dNLASPxXguIc_ZB9j48dw0sglBl3jTXv0mqxTw5PHkSBUi2spXzIgK49hSwZw2yKRi0BXuhZMa6vzoISTDmvuQvz8nDmuvInyYompL_qwboz-GLkaHU7OolNzF63R-i-xeS79h0FmDq5nZaLuxdI6sJKOAdoAyg',
      technologies: ['Next.js', 'Tailwind', 'GSAP'],
      delay: 600,
      detailedDescription: [
        'Landing page corporativa de alto rendimiento con animaciones fluidas y experiencia de usuario excepcional.',
        'Optimizada para SEO con puntuación perfecta en Lighthouse y tiempos de carga ultra rápidos.'
      ],
      detailedTechnologies: ['Next.js 13', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'SEO'],
      date: 'Jul 2023',
      repoUrl: 'https://github.com/usuario/corporate-landing',
      demoUrl: 'https://corporate-landing-demo.com',
      detailImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwIEBqCLDjUmd-lkbSqhm7KpOcJkbNoMFbdq_D-cJQ_J3g4Cz7coKAxI2SQJqrRLLyOnDVl64w7d8HKLbFqtT4MvPeVUn_X4JkmKShWDmGPLu2dNLASPxXguIc_ZB9j48dw0sglBl3jTXv0mqxTw5PHkSBUi2spXzIgK49hSwZw2yKRi0BXuhZMa6vzoISTDmvuQvz8nDmuvInyYompL_qwboz-GLkaHU7OolNzF63R-i-xeS79h0FmDq5nZaLuxdI6sJKOAdoAyg'
    },
    {
      id: 5,
      title: 'RealTime Chat',
      description: 'Sistema de mensajería instantánea con salas privadas, notificaciones push y encriptación E2E.',
      category: 'Full Stack',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZQzn0rARUtWpjyX2bQICx7uYRHgowfWQCnU-mswUfDPm2tuOeoE0VD9C7MbmTwkWavJfC7ksoET0pE0Bgh8CcOMkTqvivs8OcGMT0Q6CN3E5zNPE7mwzlgdAsXFpd4hYJuxw8zY-Jm1ZXxp1gfCvAeFNr_C6cZlUgtHvLPDBCoOpeyH56NNTHvzS7BoFNvGYxURtWgaBKhe0ajfNFdrLgrcjsUr5b1haLqXq5vYWZyyfKoIfhckzKY8iXGUQ3_yERQmjgcR62jqw',
      technologies: ['Socket.io', 'Redis', 'Express'],
      delay: 700,
      detailedDescription: [
        'Plataforma de mensajería en tiempo real con soporte para salas públicas y privadas.',
        'Incluye notificaciones push, indicadores de escritura, encriptación de extremo a extremo y historial persistente.'
      ],
      detailedTechnologies: ['Socket.io', 'Redis', 'Express', 'MongoDB', 'React'],
      date: 'Jun 2023',
      repoUrl: 'https://github.com/usuario/realtime-chat',
      demoUrl: 'https://realtime-chat-demo.com',
      detailImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZQzn0rARUtWpjyX2bQICx7uYRHgowfWQCnU-mswUfDPm2tuOeoE0VD9C7MbmTwkWavJfC7ksoET0pE0Bgh8CcOMkTqvivs8OcGMT0Q6CN3E5zNPE7mwzlgdAsXFpd4hYJuxw8zY-Jm1ZXxp1gfCvAeFNr_C6cZlUgtHvLPDBCoOpeyH56NNTHvzS7BoFNvGYxURtWgaBKhe0ajfNFdrLgrcjsUr5b1haLqXq5vYWZyyfKoIfhckzKY8iXGUQ3_yERQmjgcR62jqw'
    },
    {
      id: 6,
      title: 'Auth Service',
      description: 'Servicio de autenticación centralizado con soporte para OAuth2, JWT y autenticación de dos factores.',
      category: 'Backend',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpXcyuPaXVXXE3C0eTZ4SqY6mcn8h5R2gy70NmwkariE0tSEHEi5XnRIzD4sT8-riq56fQ1aiL4CqpeuuQpewUAfmPAREGIv-yQb_JM9nbkIeOWWd7Fid7WhwdLDazqYQr4lRNwenzkMpqL-zrDxyRHz064hlsUEO9Dd_leukBHXr8NIoe_9tUImI_xeCrkN9aWb28qGTuzpqhfEDnJbfMwXk_-iL96bg9p4q0W5kBoADhpqs6s3ECFlSu9ihd8DF42wiB2fpXsvM',
      technologies: ['Go', 'gRPC', 'AWS'],
      delay: 800,
      detailedDescription: [
        'Servicio de autenticación centralizado diseñado para arquitecturas de microservicios.',
        'Soporta múltiples proveedores OAuth2, autenticación multifactor y gestión de sesiones distribuidas.'
      ],
      detailedTechnologies: ['Go', 'gRPC', 'AWS Lambda', 'DynamoDB', 'OAuth2'],
      date: 'May 2023',
      repoUrl: 'https://github.com/usuario/auth-service',
      demoUrl: 'https://auth-service-docs.com',
      detailImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpXcyuPaXVXXE3C0eTZ4SqY6mcn8h5R2gy70NmwkariE0tSEHEi5XnRIzD4sT8-riq56fQ1aiL4CqpeuuQpewUAfmPAREGIv-yQb_JM9nbkIeOWWd7Fid7WhwdLDazqYQr4lRNwenzkMpqL-zrDxyRHz064hlsUEO9Dd_leukBHXr8NIoe_9tUImI_xeCrkN9aWb28qGTuzpqhfEDnJbfMwXk_-iL96bg9p4q0W5kBoADhpqs6s3ECFlSu9ihd8DF42wiB2fpXsvM'
    }
  ];

  get filteredProjects(): Project[] {
    if (this.selectedFilter === 'Todos') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.selectedFilter);
  }

  selectFilter(filterId: string): void {
    this.selectedFilter = filterId;
  }

  openProjectModal(project: Project): void {
    this.selectedProject = project;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedProject = null;
    document.body.style.overflow = '';
  }
}
