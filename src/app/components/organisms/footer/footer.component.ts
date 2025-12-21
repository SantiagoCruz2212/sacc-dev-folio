import { Component } from '@angular/core';
import { VERSION_INFO } from '../../../shared/constants/version';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  version = VERSION_INFO.version;
  year = VERSION_INFO.year;
  buildDate = VERSION_INFO.buildDate;

  get formattedBuildDate(): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };
    return this.buildDate.toLocaleDateString('es-ES', options);
  }
}
