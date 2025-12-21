import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvDownloadService } from '../../services/cv-download.service';

@Component({
  selector: 'app-cv-download-toast',
  imports: [CommonModule],
  templateUrl: './cv-download-toast.component.html',
  styleUrl: './cv-download-toast.component.scss'
})
export class CvDownloadToastComponent {
  constructor(public cvDownloadService: CvDownloadService) {}

  get showToast$() {
    return this.cvDownloadService.showToast$;
  }

  closeToast(): void {
    this.cvDownloadService.closeToast();
  }

  downloadCV(language: 'es' | 'en'): void {
    this.cvDownloadService.downloadCV(language);
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeToast();
    }
  }
}
