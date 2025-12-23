import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  imports: [CommonModule],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss'
})
export class LanguageSelectorComponent implements OnInit {
  isOpen = false;
  currentLanguage = 'ES';

  languages = [
    { code: 'ES', name: 'Español', flag: '🇪🇸' },
    { code: 'EN', name: 'English', flag: '🇺🇸' }
  ];

  constructor(private translate: TranslateService) {
    // Get current language from TranslateService
    const currentLang = this.translate.currentLang || this.translate.defaultLang || 'es';
    this.currentLanguage = currentLang.toUpperCase();
  }

  ngOnInit() {
    // Subscribe to language changes
    this.translate.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang.toUpperCase();
    });
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectLanguage(language: { code: string; name: string; flag: string }) {
    const langCode = language.code.toLowerCase();
    this.currentLanguage = language.code;
    this.translate.use(langCode);
    localStorage.setItem('preferredLanguage', langCode);
    this.isOpen = false;
  }

  getCurrentLanguage() {
    return this.languages.find(lang => lang.code === this.currentLanguage);
  }
}
