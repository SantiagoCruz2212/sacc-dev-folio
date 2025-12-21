import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvDownloadService {
  private showToastSubject = new BehaviorSubject<boolean>(false);
  showToast$ = this.showToastSubject.asObservable();

  openToast(): void {
    this.showToastSubject.next(true);
  }

  closeToast(): void {
    this.showToastSubject.next(false);
  }

  downloadCV(language: 'es' | 'en'): void {
    // Aquí implementarías la lógica real de descarga
    const cvUrls = {
      es: '/cv/HV.pdf',
      en: '/cv/CV.pdf'
    };

    const fileNames = {
      es: 'HV.pdf',
      en: 'CV.pdf'
    };

    console.log(`Descargando CV en ${language === 'es' ? 'Español' : 'Inglés'}`);

    // Simular descarga (en producción usarías una descarga real)
    const link = document.createElement('a');
    link.href = cvUrls[language];
    link.download = fileNames[language];
    link.click();

    this.closeToast();
  }
}
