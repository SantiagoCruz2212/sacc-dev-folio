import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './components/organisms/header/header.component';
import { FooterComponent } from './components/organisms/footer/footer.component';
import { CvDownloadToastComponent } from './shared/components/cv-download-toast/cv-download-toast.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CvDownloadToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'sacc-portfolio';

  constructor(private translate: TranslateService) {
    // Set default language
    this.translate.setDefaultLang('es');

    // Use saved language or default to Spanish
    const savedLang = localStorage.getItem('preferredLanguage') || 'es';
    this.translate.use(savedLang);
  }

  ngOnInit() {
    // Additional initialization if needed
  }
}
