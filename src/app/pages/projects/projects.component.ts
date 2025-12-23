import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { GithubService, Project } from '../../shared/services/github.service';

interface Filter {
  id: string;
  labelKey: string;
  icon: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  selectedFilter: string = 'Todos';
  selectedProject: Project | null = null;
  isModalOpen: boolean = false;
  isLoading: boolean = true;
  error: string | null = null;

  filters: Filter[] = [
    { id: 'Todos', labelKey: 'projects.filter-all', icon: 'grid_view' },
    { id: 'Frontend', labelKey: 'projects.filter-web', icon: 'desktop_windows' },
    { id: 'Backend', labelKey: 'projects.filter-backend', icon: 'database' },
    { id: 'Full Stack', labelKey: 'projects.filter-fullstack', icon: 'layers' }
  ];

  projects: Project[] = [];

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.isLoading = true;
    this.error = null;

    this.githubService.getProjectsFromRepos().subscribe({
      next: (projects) => {
        this.projects = projects;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error loading projects from GitHub:', err);
        this.error = 'No se pudieron cargar los proyectos. Por favor, intenta más tarde.';
        this.isLoading = false;
      }
    });
  }

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

  formatRepoSize(sizeInKB: number): string {
    if (sizeInKB < 1024) {
      return `${sizeInKB} KB`;
    }
    const sizeInMB = (sizeInKB / 1024).toFixed(1);
    return `${sizeInMB} MB`;
  }
}
