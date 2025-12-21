# Estructura del Proyecto - SACC Portfolio

Este proyecto sigue la metodología de **Diseño Atómico (Atomic Design)** para organizar los componentes de UI.

## Estructura de Carpetas

```
src/
├── app/
│   ├── components/          # Componentes reutilizables
│   │   ├── atoms/          # Componentes más básicos (botones, inputs, iconos)
│   │   ├── molecules/      # Combinación de átomos (search bar, card simple)
│   │   ├── organisms/      # Componentes complejos (navbar, footer, formularios)
│   │   └── templates/      # Layouts y estructuras de página
│   │
│   ├── pages/              # Vistas/Páginas principales
│   │   ├── home/          # Página de inicio
│   │   ├── projects/      # Página de proyectos
│   │   ├── about/         # Página sobre mí
│   │   └── contact/       # Página de contacto
│   │
│   ├── core/              # Funcionalidades core
│   │   ├── services/      # Servicios de Angular
│   │   ├── guards/        # Guards de rutas
│   │   ├── interceptors/  # Interceptors HTTP
│   │   └── models/        # Interfaces y modelos
│   │
│   └── shared/            # Utilidades compartidas
│       ├── directives/    # Directivas personalizadas
│       ├── pipes/         # Pipes personalizados
│       └── utils/         # Funciones utilitarias
│
└── styles/                # Estilos globales
    ├── abstracts/         # Variables, mixins, funciones
    ├── base/              # Reset, tipografía, estilos base
    └── layout/            # Grid, containers, layouts
```

## Metodología de Diseño Atómico

### Atoms (Átomos)
Componentes UI más pequeños e indivisibles:
- Botones
- Inputs
- Labels
- Iconos
- Badges

### Molecules (Moléculas)
Combinación de átomos que trabajan juntos:
- Search bar (input + botón)
- Card simple (imagen + título + texto)
- Form field (label + input + error message)

### Organisms (Organismos)
Componentes complejos formados por moléculas y átomos:
- Header/Navbar
- Footer
- Formularios completos
- Secciones de página

### Templates
Layouts que definen la estructura de las páginas:
- Main layout
- Auth layout
- Dashboard layout

### Pages (Páginas)
Instancias específicas de templates con contenido real:
- Home
- Projects
- About
- Contact

## Rutas Principales

- `/inicio` - Página de inicio
- `/proyectos` - Portafolio de proyectos
- `/sobre-mi` - Información personal y profesional
- `/contacto` - Formulario y datos de contacto

## Estilos

El proyecto utiliza SCSS con una estructura modular:

### Variables (`abstracts/_variables.scss`)
- Colores
- Tipografía
- Espaciado
- Breakpoints
- Border radius
- Sombras
- Transiciones

### Mixins (`abstracts/_mixins.scss`)
- Media queries responsivos
- Flexbox utilities
- Text truncation
- Aspect ratios

### Base (`base/`)
- Reset CSS
- Estilos tipográficos base
- Clases utilitarias

## Próximos Pasos

1. Crear componentes atómicos básicos (Button, Input, Card, etc.)
2. Desarrollar organismos (Navbar, Footer)
3. Implementar las páginas con contenido real
4. Agregar animaciones y transiciones
5. Implementar funcionalidades específicas (formularios, filtros, etc.)
