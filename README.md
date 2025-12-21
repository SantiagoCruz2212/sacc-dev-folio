# SACC Portfolio

Portfolio personal desarrollado con Angular y diseño atómico.

## Tecnologías

- Angular (última versión)
- TypeScript
- SCSS
- Diseño Atómico (Atomic Design)

## Estructura del Proyecto

El proyecto sigue la metodología de **Diseño Atómico** para organizar los componentes. Para más detalles sobre la estructura, consulta [STRUCTURE.md](./STRUCTURE.md).

## Páginas Principales

- **Inicio** (`/inicio`) - Página de bienvenida y presentación
- **Proyectos** (`/proyectos`) - Portafolio de proyectos destacados
- **Sobre mí** (`/sobre-mi`) - Información personal y profesional
- **Contacto** (`/contacto`) - Formulario y datos de contacto

## Instalación y Configuración

### Requisitos previos

- Node.js (v18 o superior)
- npm o yarn
- Angular CLI

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start

# El proyecto estará disponible en http://localhost:4200
```

## Scripts Disponibles

```bash
# Desarrollo
npm start                 # Inicia el servidor de desarrollo

# Build
npm run build            # Build de producción
npm run build:dev        # Build de desarrollo

# Testing
npm test                 # Ejecuta tests unitarios
npm run test:coverage    # Tests con cobertura

# Linting
npm run lint            # Ejecuta el linter
```

## Arquitectura de Componentes

### Atoms (Átomos)
Componentes UI básicos reutilizables como botones, inputs, iconos, etc.

### Molecules (Moléculas)
Combinación de átomos que forman componentes más complejos.

### Organisms (Organismos)
Secciones completas de la UI formadas por moléculas y átomos.

### Templates
Layouts que definen la estructura de las páginas.

### Pages (Páginas)
Vistas completas con contenido específico.

## Estilos

El proyecto utiliza SCSS con un sistema modular:

- `abstracts/` - Variables, mixins y funciones
- `base/` - Reset CSS, tipografía y estilos base
- `layout/` - Grid, containers y layouts

### Variables disponibles

- Colores
- Tipografía (tamaños, pesos, familias)
- Espaciado
- Breakpoints responsivos
- Border radius
- Sombras
- Transiciones

## Desarrollo

### Crear un nuevo componente

```bash
# Átomo
ng generate component components/atoms/nombre-componente

# Molécula
ng generate component components/molecules/nombre-componente

# Organismo
ng generate component components/organisms/nombre-componente

# Página
ng generate component pages/nombre-pagina
```

### Crear un servicio

```bash
ng generate service core/services/nombre-servicio
```

## Estado del Proyecto

### Completado ✓

- [x] Configuración inicial del proyecto Angular
- [x] Estructura de carpetas con diseño atómico
- [x] Páginas principales creadas (Home, Projects, About, Contact)
- [x] Sistema de routing configurado
- [x] Variables y mixins SCSS base
- [x] Estilos tipográficos y reset CSS

### Próximos Pasos

- [ ] Crear componentes atómicos básicos (Button, Input, Card)
- [ ] Desarrollar navbar y footer
- [ ] Diseñar e implementar página de inicio
- [ ] Desarrollar sección de proyectos con filtros
- [ ] Implementar formulario de contacto
- [ ] Añadir animaciones y transiciones
- [ ] Optimización para SEO
- [ ] Testing y documentación

## Autor

Santiago Cruz (SACC)

## Licencia

Este proyecto es de uso personal.
