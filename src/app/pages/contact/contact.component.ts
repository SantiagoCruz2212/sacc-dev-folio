import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: 'github' | 'linkedin';
  hoverColor: string;
}

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactEmail = 'sacc13@outlook.es';

  formData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  subjectOptions = [
    { value: '', label: 'Selecciona un motivo', disabled: true },
    { value: 'freelance', label: 'Proyecto Freelance', disabled: false },
    { value: 'job', label: 'Oportunidad Laboral', disabled: false },
    { value: 'collab', label: 'Colaboración', disabled: false },
    { value: 'other', label: 'Otro', disabled: false }
  ];

  socialLinks: SocialLink[] = [
    {
      id: 1,
      name: 'GitHub',
      url: 'https://github.com/SantiagoCruz2212',
      icon: 'github',
      hoverColor: '#000000'
    },
    {
      id: 2,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/santiago-castrocruz/',
      icon: 'linkedin',
      hoverColor: '#0077b5'
    }
  ];

  copyEmail(): void {
    navigator.clipboard.writeText(this.contactEmail).then(() => {
      console.log('Email copiado al portapapeles');
      // Aquí podrías mostrar un toast o notificación
    }).catch(err => {
      console.error('Error al copiar email:', err);
    });
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      console.log('Formulario enviado:', this.formData);
      // Aquí implementarías el envío real del formulario
      this.resetForm();
    }
  }

  isFormValid(): boolean {
    return !!(
      this.formData.name &&
      this.formData.email &&
      this.formData.subject &&
      this.formData.message
    );
  }

  resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
