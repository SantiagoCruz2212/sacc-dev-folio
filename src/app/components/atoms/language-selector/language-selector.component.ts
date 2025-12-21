import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-selector',
  imports: [CommonModule],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss'
})
export class LanguageSelectorComponent {
  isOpen = false;
  currentLanguage = 'ES';

  languages = [
    { code: 'ES', name: 'Español', flag: '🇪🇸' },
    { code: 'EN', name: 'English', flag: '🇺🇸' }
  ];

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectLanguage(language: { code: string; name: string; flag: string }) {
    this.currentLanguage = language.code;
    this.isOpen = false;
  }

  getCurrentLanguage() {
    return this.languages.find(lang => lang.code === this.currentLanguage);
  }
}
