# Portfolio Personal - Santiago Andrés Castro Cruz

Portafolio web profesional desarrollado con Angular 19, diseñado para mostrar proyectos, experiencia laboral y habilidades técnicas de forma moderna e interactiva.

## 📋 Tabla de Contenidos

- [Descripción](#descripción)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Características Principales](#características-principales)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación y Configuración](#instalación-y-configuración)
- [Funcionalidades Destacadas](#funcionalidades-destacadas)
- [API de GitHub](#api-de-github)
- [Contacto](#contacto)

## 📝 Descripción

Este es un portafolio web moderno y completamente responsive que presenta mi experiencia profesional, proyectos y habilidades como desarrollador Fullstack. El sitio está diseñado con un enfoque en la experiencia del usuario, animaciones suaves y un diseño oscuro profesional.

## 🛠️ Tecnologías Utilizadas

### Frontend Framework
- **Angular 19.2.0** - Framework principal
- **TypeScript 5.7.2** - Lenguaje de programación
- **RxJS 7.8.0** - Programación reactiva

### Estilos
- **SCSS/SASS** - Preprocesador CSS
- **CSS Custom Properties** - Variables CSS nativas
- **Flexbox & Grid** - Layouts modernos
- **Animaciones CSS** - Transiciones y animaciones personalizadas

### Herramientas y Librerías
- **Angular Router** - Navegación SPA
- **Angular Forms** - Formularios reactivos
- **HttpClient** - Consumo de APIs REST
- **GitHub API** - Integración con repositorios
- **Google Fonts** - Tipografía (Inter)
- **Material Symbols** - Sistema de iconos

### Development Tools
- **Angular CLI 19.2.8** - Herramienta de línea de comandos
- **Karma & Jasmine** - Testing framework

## ✨ Características Principales

### 1. Páginas del Sitio

#### 🏠 Inicio (Home)
- Hero section con presentación personal
- Imagen de perfil con efectos visuales
- Tech stack con logos de tecnologías
- Botones de navegación rápida
- Animaciones de entrada suaves

#### 💼 Proyectos
- **Integración con GitHub API** - Muestra automáticamente repositorios públicos
- Categorización automática (Frontend/Backend/Full Stack)
- Sistema de filtros por categoría
- Modal detallado para cada proyecto
- Estados de carga y error
- Enlaces a repositorio y demo

#### 👔 Experiencia
- Timeline interactivo de experiencia laboral
- Badges de tecnologías utilizadas
- Sección de educación y certificaciones
- Botones de descarga de CV (español/inglés)
- Enlace a perfil de LinkedIn

#### 👤 Sobre Mí
- Información personal detallada
- Habilidades y competencias
- Filosofía de trabajo

#### 📧 Contacto
- Formulario de contacto funcional
- Botón de copia de email con feedback visual
- Enlaces a redes sociales (GitHub, LinkedIn)
- Integración con cliente de correo mediante `mailto:`

### 2. Funcionalidades Especiales

#### 📄 Sistema de Descarga de CV
- Toast modal para selección de idioma
- Descarga automática de CV en español (HV.pdf) o inglés (CV.pdf)
- Almacenamiento en carpeta pública accesible

#### 🔗 Integración con GitHub
- Consumo de GitHub API REST
- Transformación automática de datos de repositorios
- Detección inteligente de categorías basada en:
  - Lenguaje principal del repositorio
  - Topics configurados en GitHub
  - Análisis del nombre del repositorio
- Generación de imágenes placeholder con gradientes
- Formateo de fechas y nombres
- Extracción automática de tecnologías

#### 📮 Formulario de Contacto
- Validación en tiempo real
- Selector de tipo de consulta
- Integración con mailto para envío directo
- Pre-llenado automático de datos del remitente
- Reset automático después de enviar

#### 📋 Copiar Email al Portapapeles
- Doble método: Clipboard API moderna + Fallback
- Feedback visual con icono de confirmación
- Animación de éxito
- Compatibilidad con todos los navegadores

### 3. Diseño y UX

#### 📱 Responsive Design
- Mobile-first approach
- Breakpoints optimizados para todos los dispositivos
- Menú hamburguesa para móviles
- Adaptación de layouts y tipografías
- Control de scroll en menú móvil

#### 🧭 Sistema de Navegación
- Header sticky con backdrop blur
- Indicadores de página activa
- Scroll suave entre secciones
- Menú lateral para móviles con overlay
- Backdrop para cerrar menú

#### 🎨 Tema Oscuro Profesional
- Paleta de colores consistente
- Contraste optimizado para accesibilidad
- Efectos de glow y blur sutiles
- Scrollbar personalizado

#### ✨ Animaciones
- Fade in/out suaves
- Animaciones de entrada escalonadas
- Efectos hover interactivos
- Transiciones de estados

### 4. Optimizaciones

#### ⚡ Performance
- Lazy loading de componentes
- Optimización de imágenes
- Minimización de re-renders
- Uso eficiente de observables

#### 🔍 SEO y Accesibilidad
- Meta tags configurados
- Estructura semántica HTML5
- ARIA labels en elementos interactivos
- Alt text en imágenes

## 📁 Estructura del Proyecto

```
sacc-dev-folio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── atoms/              # Componentes atómicos
│   │   │   │   └── language-selector/
│   │   │   └── organisms/          # Componentes complejos
│   │   │       ├── header/
│   │   │       └── footer/
│   │   ├── pages/                  # Páginas principales
│   │   │   ├── home/
│   │   │   ├── projects/
│   │   │   ├── experience/
│   │   │   ├── about/
│   │   │   └── contact/
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   │   └── cv-download-toast/
│   │   │   └── services/
│   │   │       ├── cv-download.service.ts
│   │   │       └── github.service.ts
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── styles/
│   │   ├── abstracts/
│   │   │   ├── _variables.scss    # Variables globales
│   │   │   └── _mixins.scss       # Mixins reutilizables
│   │   └── base/
│   │       ├── _reset.scss        # Reset CSS
│   │       ├── _typography.scss   # Tipografía
│   │       └── _animations.scss   # Animaciones globales
│   ├── public/
│   │   ├── cv/                    # CVs en múltiples idiomas
│   │   │   ├── HV.pdf            # CV en español
│   │   │   └── CV.pdf            # CV en inglés
│   │   └── images/
│   │       └── profile/
│   └── index.html
├── angular.json
├── package.json
├── tsconfig.json
├── STRUCTURE.md
└── README.md
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm (versión 9 o superior)
- Angular CLI 19

### Pasos de Instalación

1. **Instalar dependencias**
```bash
npm install
```

2. **Configurar archivos estáticos**
   - Agregar `HV.pdf` (CV en español) en `public/cv/`
   - Agregar `CV.pdf` (CV en inglés) en `public/cv/`
   - Agregar imagen de perfil en `public/images/profile/Santiago.jpg`

3. **Configurar información personal**

   **GitHub Service** (`src/app/shared/services/github.service.ts`)
   ```typescript
   private readonly username = 'TU_USUARIO_GITHUB';
   ```

   **Contact Component** (`src/app/pages/contact/contact.component.ts`)
   ```typescript
   contactEmail = 'tu-email@ejemplo.com';
   ```

   **Experience Component** (`src/app/pages/experience/experience.component.ts`)
   ```typescript
   linkedInUrl = 'https://www.linkedin.com/in/tu-perfil/';
   ```

4. **Ejecutar en desarrollo**
```bash
npm start
# o
ng serve
```

5. **Compilar para producción**
```bash
npm run build
# o
ng build --configuration production
```

Los archivos compilados estarán en `dist/`

## 🎯 Funcionalidades Destacadas

### Servicio de GitHub (`github.service.ts`)

```typescript
// Obtiene y transforma automáticamente los repositorios
getProjectsFromRepos(): Observable<Project[]>

// Determina la categoría basándose en múltiples factores
private determineCategory(repo: GitHubRepo): 'Full Stack' | 'Frontend' | 'Backend'

// Extrae tecnologías de topics y lenguajes
private getTechnologies(repo: GitHubRepo): string[]

// Genera imágenes placeholder personalizadas
private getProjectImage(repo: GitHubRepo): string

// Formatea nombres de repositorios
private formatRepoName(name: string): string

// Formatea tecnologías con capitalización correcta
private formatTechnology(tech: string): string
```

### Servicio de Descarga de CV (`cv-download.service.ts`)

```typescript
// Abre el toast de selección de idioma
openToast(): void

// Descarga el CV en el idioma seleccionado
downloadCV(language: 'es' | 'en'): void

// Controla la visibilidad del toast
closeToast(): void
```

### Control de Scroll en Menú Móvil (`header.component.ts`)

```typescript
// Bloquea el scroll cuando el menú está abierto
private toggleBodyOverflow(): void

// Previene scroll en html y body usando position: fixed
// Evita que el contenido se mueva mientras el menú está abierto
```

### Copia de Email Robusta (`contact.component.ts`)

```typescript
// Método principal con fallback automático
copyEmail(): void

// Método de respaldo usando execCommand
private fallbackCopyEmail(): void

// Muestra feedback visual de éxito
private showCopySuccess(): void
```

## 🔌 API de GitHub

El proyecto consume la API pública de GitHub para mostrar automáticamente los proyectos:

**Endpoint utilizado:**
```
GET https://api.github.com/users/{username}/repos?sort=updated&per_page=100
```

**Características:**
- No requiere autenticación para repositorios públicos
- Ordenamiento por fecha de actualización
- Límite de 100 repositorios
- Respuesta en JSON con información completa

**Datos obtenidos:**
- Nombre y descripción del repositorio
- Lenguaje principal de programación
- Topics/etiquetas
- Número de estrellas y forks
- Fechas de creación y actualización
- URL del repositorio y homepage
- Información del propietario

**Transformación de datos:**
- Categorización automática (Frontend/Backend/Full Stack)
- Extracción de tecnologías de topics y lenguajes
- Generación de imágenes placeholder con gradientes de colores
- Formateo de fechas en español (Ene, Feb, Mar, etc.)
- Formateo de nombres de repositorios (kebab-case → Title Case)

## 🔐 Características de Seguridad

- Validación de formularios en cliente
- Sanitización de URLs antes de navegación
- Manejo seguro de errores de API
- Protección contra XSS mediante Angular
- CORS configurado para API de GitHub
- Escape de caracteres especiales en mailto

## 🌐 Navegadores Soportados

- Chrome
- Firefox
- Edge
- Navegadores móviles modernos (iOS Safari, Chrome Mobile)

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm start                 # Inicia el servidor de desarrollo en puerto 4200
ng serve                  # Alternativa con Angular CLI

# Build
npm run build            # Build de producción optimizado
ng build                 # Alternativa con Angular CLI
ng build --configuration production  # Build explícito de producción

# Testing
npm test                 # Ejecuta tests unitarios con Karma
ng test                  # Alternativa con Angular CLI
```

## 🚧 Próximas Mejoras

- [ ] Implementar internacionalización (i18n) completa en español e inglés
- [ ] Agregar modo claro/oscuro con toggle
- [ ] Tests unitarios completos con Jasmine
- [ ] Animaciones más complejas con GSAP
- [ ] Galería de certificados interactiva

## 📞 Contacto

**Santiago Andrés Castro Cruz**

- 📧 Email: sacc13@outlook.es
- 💼 LinkedIn: [santiago-castrocruz](https://www.linkedin.com/in/santiago-castrocruz/)
- 🐙 GitHub: [SantiagoCruz2212](https://github.com/SantiagoCruz2212)
- 🌐 Portfolio: [En construcción]

## 📄 Licencia

Este proyecto es de uso personal.

**Versión:** 1.0.0

**Última actualización:** Diciembre 2025

**Desarrollado con ❤️ por Santiago Castro Cruz**
