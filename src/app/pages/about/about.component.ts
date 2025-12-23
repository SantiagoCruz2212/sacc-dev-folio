import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SoftSkill {
  id: number;
  name: string;
  icon: string;
}

interface Hobby {
  id: number;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  profileInfo = {
    name: 'Santiago Andres',
    title: 'Desarrollador Fullstack Senior',
    description: 'Apasionado por crear soluciones eficientes y escalables que resuelvan problemas reales, colaborando en cada etapa del proyecto.',
    location: 'Cali, Colombia',
    available: true,
    imageUrl: 'images/profile/Santiago.jpg'
  };

  motivations = [
    'Mi viaje en la programación comenzó por la curiosidad de entender cómo funcionaban mis videojuegos favoritos. Esa chispa inicial se transformó rápidamente en una obsesión por construir herramientas que no solo funcionen, sino que deleiten a quien las usa.',
    'A lo largo de los años, he trabajado en startups dinámicas y grandes corporaciones, lo que me ha enseñado a equilibrar la velocidad de desarrollo con la calidad del código. Me especializo en el stack MERN, pero nunca dejo de aprender nuevas tecnologías.'
  ];

  softSkills: SoftSkill[] = [
    { id: 1, name: 'Comunicación', icon: 'chat' },
    { id: 2, name: 'Resolución', icon: 'lightbulb' },
    { id: 3, name: 'Trabajo en Equipo', icon: 'group' },
    { id: 4, name: 'Adaptabilidad', icon: 'sync_alt' },
    { id: 5, name: 'Liderazgo', icon: 'star' }
  ];

  hobbies: Hobby[] = [
    {
      id: 1,
      title: 'Senderismo',
      description: 'Disfruto desconectando en la sierra y explorando nuevas rutas en la naturaleza.',
      icon: 'hiking'
    },
    {
      id: 2,
      title: 'Café de Especialidad',
      description: 'Experimentando constantemente con nuevos métodos de extracción y granos.',
      icon: 'coffee'
    },
    {
      id: 3,
      title: 'Game Jams',
      description: 'Participo los fines de semana creando prototipos rápidos y divertidos.',
      icon: 'sports_esports'
    }
  ];
}
