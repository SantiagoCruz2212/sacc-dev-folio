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
  emailCopied = false;

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
    // Método moderno con fallback
    if (navigator.clipboard && navigator.clipboard.writeText) {
      // Método moderno (Clipboard API)
      navigator.clipboard.writeText(this.contactEmail).then(() => {
        this.showCopySuccess();
      }).catch(err => {
        console.error('Error al copiar con Clipboard API:', err);
        this.fallbackCopyEmail();
      });
    } else {
      // Fallback para navegadores que no soportan Clipboard API
      this.fallbackCopyEmail();
    }
  }

  private fallbackCopyEmail(): void {
    try {
      // Crear un elemento textarea temporal
      const textArea = document.createElement('textarea');
      textArea.value = this.contactEmail;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      // Intentar copiar
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);

      if (successful) {
        this.showCopySuccess();
      } else {
        console.error('Error al copiar email con método fallback');
        alert('No se pudo copiar el email. Por favor, cópialo manualmente: ' + this.contactEmail);
      }
    } catch (err) {
      console.error('Error al copiar email:', err);
      alert('No se pudo copiar el email. Por favor, cópialo manualmente: ' + this.contactEmail);
    }
  }

  private showCopySuccess(): void {
    this.emailCopied = true;
    console.log('Email copiado al portapapeles:', this.contactEmail);

    // Resetear el estado después de 2 segundos
    setTimeout(() => {
      this.emailCopied = false;
    }, 2000);
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      console.log('Formulario enviado:', this.formData);

      // Crear el cuerpo del email
      const subject = this.getSubjectLabel();
      const body = `Nombre: ${this.formData.name}\nEmail: ${this.formData.email}\n\nAsunto: ${subject}\n\nMensaje:\n${this.formData.message}`;

      // Crear el enlace mailto
      const mailtoLink = `mailto:${this.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Abrir el cliente de correo
      window.location.href = mailtoLink;

      // Resetear el formulario después de un breve delay
      setTimeout(() => {
        this.resetForm();
      }, 500);
    }
  }

  private getSubjectLabel(): string {
    const option = this.subjectOptions.find(opt => opt.value === this.formData.subject);
    return option ? option.label : this.formData.subject;
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
