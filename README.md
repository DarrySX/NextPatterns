<div align="center">
  <h1>NextPatterns</h1>
  <p>
    A curated collection of Next.js architectural patterns and best practices to build robust, scalable, and maintainable applications.
  </p>
  <p>
    <a href="https://next-patterns-nine.vercel.app/"><img src="https://img.shields.io/badge/demo-live-brightgreen" alt="Live Demo"></a>
    <a href="https://github.com/your-username/NextPatterns/actions"><img src="https://img.shields.io/github/actions/workflow/status/your-username/NextPatterns/ci.yml?branch=main" alt="Build Status"></a>
    <a href="https://github.com/your-username/NextPatterns/blob/main/LICENSE"><img src="https://img.shields.io/github/license/your-username/NextPatterns" alt="License"></a>
    <a href="#contributors"><img src="https://img.shields.io/github/contributors/your-username/NextPatterns" alt="Contributors"></a>
  </p>
  <p>
    <strong>🚀 <a href="https://next-patterns-nine.vercel.app/">View Live Demo</a></strong>
  </p>
</div>

---

## English

### Table of Contents

*   [Introduction](#introduction)
*   [Features](#features)
*   [Getting Started](#getting-started)
*   [Usage](#usage)
*   [Contributing](#contributing)
*   [Code of Conduct](#code-of-conduct)
*   [License](#license)
*   [Contact](#contact)

### Introduction

NextPatterns is an open-source project dedicated to providing a comprehensive collection of architectural patterns and best practices for Next.js development. Our goal is to help developers build high-quality, scalable, and maintainable applications by offering a curated set of examples and guidelines.

**🌐 [Try it now](https://next-patterns-nine.vercel.app/)** - Experience the platform without installation!

This project is for you if you are:

*   A developer new to Next.js looking for guidance on how to structure your application.
*   An experienced developer who wants to explore different architectural patterns and best practices.
*   A team that wants to establish a consistent coding style and architecture across your projects.

### Features

*   **Comprehensive Pattern Library:** A wide range of patterns covering everything from project structure to state management and data fetching.
*   **Ready-to-Use Components:** A library of reusable UI components built with Radix UI and shadcn/ui.
*   **Interactive Playground:** A built-in playground to experiment with the patterns and components in real-time.
*   **AI-Powered Assistant:** An AI assistant to help you with code analysis and suggestions.
*   **Bilingual Documentation:** All documentation is available in English and Spanish to cater to a global community.

### Getting Started

#### Prerequisites

*   Node.js (v18 or higher)
*   pnpm

#### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/NextPatterns.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd NextPatterns
    ```
3.  Install the dependencies:
    ```bash
    pnpm install
    ```
4.  Set up environment variables:
    ```bash
    cp .env.example .env.local
    ```
    Then edit `.env.local` with your Supabase credentials. Get them from your [Supabase Dashboard](https://app.supabase.com).

5.  Run the development server:
    ```bash
    pnpm dev
    ```

#### Environment Variables

This project requires the following environment variables:

*   `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
*   `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous key
*   `SUPABASE_SERVICE_ROLE_KEY` - Your Supabase service role key (server-side only)
*   `POSTGRES_URL` - PostgreSQL connection string

See `.env.example` for the complete list of required variables.

#### Deployment to Vercel

1.  Push your code to GitHub
2.  Import your repository in [Vercel](https://vercel.com)
3.  Add all environment variables from `.env.example` in Vercel's dashboard:
    *   Go to **Settings > Environment Variables**
    *   Add each variable with its corresponding value
4.  Deploy!

### Usage

The patterns and components in this project are designed to be easily adaptable to your own projects. You can browse the `app/patterns` directory to explore the different architectural patterns and the `components/ui` directory for reusable UI components.

### Contributing

We welcome contributions from the community! If you would like to contribute to the project, please read our [Contributing Guidelines](CONTRIBUTING.md).

### Code of Conduct

To ensure a welcoming and inclusive community, we have a [Code of Conduct](CODE_OF_CONDUCT.md) that all contributors are expected to follow.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

### Contact

If you have any questions or suggestions, feel free to reach out to us at [brandonvalencia9@gmail.com](mailto:brandonvalencia9@gmail.com).

---

## Español

### Tabla de Contenidos

*   [Introducción](#introducción)
*   [Características](#características)
*   [Empezando](#empezando)
*   [Uso](#uso)
*   [Contribuciones](#contribuciones)
*   [Código de Conducta](#código-de-conducta)
*   [Licencia](#licencia)
*   [Contacto](#contacto)

### Introducción

NextPatterns es un proyecto de código abierto dedicado a proporcionar una colección completa de patrones de arquitectura y mejores prácticas para el desarrollo con Next.js. Nuestro objetivo es ayudar a los desarrolladores a construir aplicaciones de alta calidad, escalables y mantenibles, ofreciendo un conjunto curado de ejemplos y guías.

**🌐 [Pruébalo ahora](https://next-patterns-nine.vercel.app/)** - ¡Experimenta la plataforma sin instalación!

Este proyecto es para ti si eres:

*   Un desarrollador nuevo en Next.js que busca orientación sobre cómo estructurar su aplicación.
*   Un desarrollador experimentado que quiere explorar diferentes patrones de arquitectura y mejores prácticas.
*   Un equipo que quiere establecer un estilo de codificación y una arquitectura consistentes en sus proyectos.

### Características

*   **Librería de Patrones Completa:** Una amplia gama de patrones que cubren todo, desde la estructura del proyecto hasta la gestión del estado y la obtención de datos.
*   **Componentes Listos para Usar:** Una librería de componentes de UI reutilizables construidos con Radix UI y shadcn/ui.
*   **Playground Interactivo:** Un playground incorporado para experimentar con los patrones y componentes en tiempo real.
*   **Asistente con IA:** Un asistente de IA para ayudarte con el análisis de código y sugerencias.
*   **Documentación Bilingüe:** Toda la documentación está disponible en inglés y español para atender a una comunidad global.

### Empezando

#### Prerrequisitos

*   Node.js (v18 o superior)
*   pnpm

#### Instalación

1.  Clona el repositorio:
    ```bash
    git clone https://github.com/your-username/NextPatterns.git
    ```
2.  Navega al directorio del proyecto:
    ```bash
    cd NextPatterns
    ```
3.  Instala las dependencias:
    ```bash
    pnpm install
    ```
4.  Configura las variables de entorno:
    ```bash
    cp .env.example .env.local
    ```
    Luego edita `.env.local` con tus credenciales de Supabase. Obtenlas desde tu [Panel de Supabase](https://app.supabase.com).

5.  Ejecuta el servidor de desarrollo:
    ```bash
    pnpm dev
    ```

#### Variables de Entorno

Este proyecto requiere las siguientes variables de entorno:

*   `NEXT_PUBLIC_SUPABASE_URL` - URL de tu proyecto de Supabase
*   `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Clave anónima de Supabase
*   `SUPABASE_SERVICE_ROLE_KEY` - Clave de rol de servicio de Supabase (solo del lado del servidor)
*   `POSTGRES_URL` - Cadena de conexión a PostgreSQL

Consulta `.env.example` para la lista completa de variables requeridas.

#### Despliegue en Vercel

1.  Sube tu código a GitHub
2.  Importa tu repositorio en [Vercel](https://vercel.com)
3.  Agrega todas las variables de entorno de `.env.example` en el dashboard de Vercel:
    *   Ve a **Settings > Environment Variables**
    *   Agrega cada variable con su valor correspondiente
4.  ¡Despliega!

### Uso

Los patrones y componentes de este proyecto están diseñados para ser fácilmente adaptables a tus propios proyectos. Puedes explorar el directorio `app/patterns` para explorar los diferentes patrones de arquitectura y el directorio `components/ui` para componentes de UI reutilizables.

### Contribuciones

¡Damos la bienvenida a las contribuciones de la comunidad! Si deseas contribuir al proyecto, por favor lee nuestras [Guías de Contribución](CONTRIBUTING.md).

### Código de Conducta

Para garantizar una comunidad acogedora e inclusiva, tenemos un [Código de Conducta](CODE_OF_CONDUCT.md) que se espera que todos los contribuyentes sigan.

### Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

### Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarnos en [brandon.valencia.calderon@gmail.com](mailto:brandon.valencia.calderon@gmail.com).
