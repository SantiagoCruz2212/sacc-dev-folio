import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

export interface Project {
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
  stars: number;
  forks: number;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private readonly GITHUB_API = 'https://api.github.com';
  private readonly username = 'SantiagoCruz2212';

  constructor(private http: HttpClient) {}

  getUserRepos(): Observable<GitHubRepo[]> {
    return this.http.get<GitHubRepo[]>(
      `${this.GITHUB_API}/users/${this.username}/repos?sort=updated&per_page=100`
    );
  }

  getProjectsFromRepos(): Observable<Project[]> {
    return this.getUserRepos().pipe(
      map(repos => {
        return repos
          .filter(repo => !repo.name.includes('SantiagoCruz2212')) // Filtrar repo de perfil
          .map((repo, index) => this.transformRepoToProject(repo, index));
      })
    );
  }

  private transformRepoToProject(repo: GitHubRepo, index: number): Project {
    const category = this.determineCategory(repo);
    const technologies = this.getTechnologies(repo);
    const image = this.getProjectImage(repo);

    return {
      id: repo.id,
      title: this.formatRepoName(repo.name),
      description: repo.description || 'Proyecto de desarrollo de software',
      category,
      image,
      technologies: technologies.slice(0, 3), // Mostrar solo las primeras 3
      delay: (index % 6 + 3) * 100, // Delays entre 300ms y 800ms
      detailedDescription: [
        repo.description || 'Proyecto de desarrollo de software',
        `Este proyecto fue creado usando ${repo.language || 'múltiples tecnologías'} y cuenta con ${repo.stargazers_count} estrellas y ${repo.forks_count} forks en GitHub.`
      ],
      detailedTechnologies: technologies,
      date: this.formatDate(repo.updated_at),
      repoUrl: repo.html_url,
      demoUrl: repo.homepage || repo.html_url,
      detailImage: image,
      stars: repo.stargazers_count,
      forks: repo.forks_count
    };
  }

  private determineCategory(repo: GitHubRepo): 'Full Stack' | 'Frontend' | 'Backend' {
    const language = (repo.language || '').toLowerCase();
    const topics = repo.topics.map(t => t.toLowerCase());
    const name = repo.name.toLowerCase();

    // Detectar Full Stack
    if (
      topics.some(t => ['fullstack', 'full-stack', 'mern', 'mean'].includes(t)) ||
      (topics.some(t => ['frontend', 'react', 'vue', 'angular'].includes(t)) &&
       topics.some(t => ['backend', 'api', 'server', 'node'].includes(t)))
    ) {
      return 'Full Stack';
    }

    // Detectar Frontend
    if (
      ['javascript', 'typescript', 'html', 'css'].includes(language) ||
      topics.some(t => ['frontend', 'react', 'vue', 'angular', 'nextjs', 'svelte', 'ui', 'web'].includes(t)) ||
      name.includes('web') || name.includes('app') || name.includes('ui')
    ) {
      return 'Frontend';
    }

    // Detectar Backend
    if (
      ['java', 'python', 'go', 'rust', 'c#', 'php', 'ruby'].includes(language) ||
      topics.some(t => ['backend', 'api', 'server', 'database', 'microservices'].includes(t)) ||
      name.includes('api') || name.includes('server') || name.includes('backend')
    ) {
      return 'Backend';
    }

    // Default basado en lenguaje
    const frontendLanguages = ['javascript', 'typescript', 'html', 'css', 'scss'];
    return frontendLanguages.includes(language) ? 'Frontend' : 'Backend';
  }

  private getTechnologies(repo: GitHubRepo): string[] {
    const technologies: string[] = [];

    // Agregar lenguaje principal
    if (repo.language) {
      technologies.push(repo.language);
    }

    // Agregar topics como tecnologías
    const relevantTopics = repo.topics.filter(topic => {
      const tech = topic.toLowerCase();
      return !['portfolio', 'project', 'learning', 'practice', 'study'].includes(tech);
    });

    technologies.push(...relevantTopics.map(t => this.formatTechnology(t)));

    // Si no hay suficientes tecnologías, agregar algunas genéricas basadas en el lenguaje
    if (technologies.length < 2) {
      const lang = (repo.language || '').toLowerCase();
      if (lang === 'javascript' || lang === 'typescript') {
        technologies.push('Node.js', 'npm');
      } else if (lang === 'python') {
        technologies.push('pip');
      } else if (lang === 'java') {
        technologies.push('Maven');
      }
    }

    return technologies.slice(0, 8); // Máximo 8 tecnologías
  }

  private formatTechnology(tech: string): string {
    const techMap: { [key: string]: string } = {
      'javascript': 'JavaScript',
      'typescript': 'TypeScript',
      'react': 'React',
      'angular': 'Angular',
      'vue': 'Vue.js',
      'nextjs': 'Next.js',
      'nodejs': 'Node.js',
      'express': 'Express',
      'nestjs': 'NestJS',
      'mongodb': 'MongoDB',
      'postgresql': 'PostgreSQL',
      'mysql': 'MySQL',
      'docker': 'Docker',
      'aws': 'AWS',
      'azure': 'Azure',
      'firebase': 'Firebase',
      'tailwind': 'Tailwind CSS',
      'bootstrap': 'Bootstrap',
      'sass': 'SASS',
      'scss': 'SCSS',
      'webpack': 'Webpack',
      'vite': 'Vite',
      'jest': 'Jest',
      'python': 'Python',
      'django': 'Django',
      'flask': 'Flask',
      'java': 'Java',
      'spring': 'Spring Boot',
      'go': 'Go',
      'rust': 'Rust',
      'csharp': 'C#',
      'dotnet': '.NET'
    };

    return techMap[tech.toLowerCase()] || tech.charAt(0).toUpperCase() + tech.slice(1);
  }

  private formatRepoName(name: string): string {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  private formatDate(dateString: string): string {
    const date = new Date(dateString);
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  }

  private getProjectImage(repo: GitHubRepo): string {
    // Generar una imagen placeholder basada en el ID del repo
    const colors = [
      '667eea,764ba2', // Púrpura
      'f093fb,f5576c', // Rosa
      '4facfe,00f2fe', // Azul
      '43e97b,38f9d7', // Verde
      'fa709a,fee140', // Naranja-Rosa
      '30cfd0,330867', // Azul oscuro
    ];

    const colorIndex = repo.id % colors.length;
    const gradient = colors[colorIndex];

    return `https://via.placeholder.com/800x600/${gradient.replace(',', '/')}?text=${encodeURIComponent(this.formatRepoName(repo.name))}`;
  }
}
