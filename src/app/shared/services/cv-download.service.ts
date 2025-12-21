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
      es: '/assets/cv/CV_Santiago_Cruz_ES.pdf',
      en: '/assets/cv/CV_Santiago_Cruz_EN.pdf'
    };

    console.log(`Descargando CV en ${language === 'es' ? 'Español' : 'Inglés'}`);

    // Simular descarga (en producción usarías una descarga real)
    const link = document.createElement('a');
    link.href = cvUrls[language];
    link.download = `CV_Santiago_Cruz_${language.toUpperCase()}.pdf`;
    link.click();

    this.closeToast();
  }
}
