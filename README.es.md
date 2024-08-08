<a id="top"></a>

<h1 align="center"><img src="./public/favicons/favicon-96x96.png" width="30" align="center"> Buscador de Películas</h1>  

<p align="center">
  <a href="#">
    <img src="https://img.shields.io/badge/made%20with-love-E760A4.svg" alt="Hecho con amor">
  </a>
  <a href="https://opensource.org/licenses/MIT" target="_blank">
    <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="Licencia">
  </a>
</p>

<div align="center">
    <a href="#-acerca-del-proyecto" target="_blank">
        Acerca Del Proyecto
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#-vista-previa" target="_blank">
        Vista Previa
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#-características" target="_blank">
        Características
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#-tecnologías" target="_blank">
        Tecnologías
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#-cómo-empezar" target="_blank">
        Cómo Empezar
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#-comandos" target="_blank">
        Comandos
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#-contribuciones" target="_blank">
        Contribuciones
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#-licencia" target="_blank">
        Licencia
    </a>
    <span>&nbsp;✦&nbsp;</span>
    <a href="#-Soporte" target="_blank">
        Soporte
    </a>
</div>
<br>

>Si quieres leer este readme en **inglés**:
>- [**README en Inglés**](https://github.com/joserafael0160/Movie-Finder/blob/main/README.md)

## 📜 Acerca Del Proyecto
¡Bienvenido a mi buscador de películas! Con esta herramienta, puedes explorar y buscar tus películas favoritas. 

Filtra por año de lanzamiento y descubre nuevas joyas cinematográficas. 

¡Disfruta de la magia del cine! 🎥🍿


<p align="right">(<a href="#top" >Volver al inicio 🔝</a>)</p>

## 👀 Vista previa
<h4>En un PC (1920x1080)</h4>
<img src="./src/assets/images/webp/Movie-Finder(PC).webp" alt="Captura de pantalla del proyecto con una resolucion de 1920x1080" width="900">

<h4>En un iPhone SE (375x667)</h4>
<img src="./src/assets/images/webp/Movie-Finder(iPhone_SE).webp" alt="Captura de pantalla del proyecto con una resolucion de 375x667" width="200">

<p align="right">(<a href="#top">Volver al inicio 🔝</a>)</p>

¡Claro! Aquí tienes una descripción de las características que has implementado en tu buscador de películas con React:

## 💬 Características
 **Soporte de Favicon**: Se ha añadido soporte para una amplia v dad de tamaños de favicon, asegurando que el ícono del sitio se muestre correctamente en todos los dispositivos y plataformas.

 **Etiquetas Open Graph y Twitter**: Se han incluido etiquetas meta de Open Graph y Twitter, lo que optimiza la vista previa del sitio web en plataformas sociales como Facebook y Twitter.

 **Compatibilidad entre navegadores**: La página web utiliza la etiqueta meta `X-UA-Compatible`, que garantiza la compatibilidad con varios navegadores, especialmente versiones antiguas de Internet Explorer.

 **API de películas (OMDb)**: Utilizaste la API de OMDb (Open Movie Database) para obtener información sobre películas.

 **Diseño de cuadrícula responsive**: En esta aplicación, las películas se mostrarán en filas y columnas, ajustándose para verse bien tanto en pantallas grandes como en dispositivos móviles.

 **Evitar búsquedas duplicadas**: Has implementado lógica para evitar que se realice la misma búsqueda dos veces seguidas. Esto mejora la eficiencia y la experiencia del usuario.

 **Búsqueda automática mientras se escribe**: Cuando el usuario escribe en el campo de búsqueda, la aplicación realiza automáticamente una búsqueda en la API de OMDb sin necesidad de hacer clic en un botón adicional. Esto proporciona una respuesta más rápida y fluida para el usuario.

 **Evitar búsquedas continuas mientras se escribe (debounce)**: El "debounce" es una técnica que retrasa la ejecución de una función (en este caso, la búsqueda) hasta que el usuario ha dejado de escribir durante un breve período de tiempo (300 ms). Esto evita búsquedas continuas mientras el usuario sigue escribiendo, lo que podría sobrecargar la API o afectar el rendimiento de la aplicación.


<p align="right">(<a href="#top">Volver al inicio 🔝</a>)</p>


## 🧰 Tecnologías utilizadas
- [**React**](https://reactjs.org/) - Una biblioteca de JavaScript para construir interfaces de usuario interactivas.
- [**Vite**](https://vitejs.dev/) - Un entorno de desarrollo rápido y ligero para aplicaciones web modernas.
- [**ESLint**](https://eslint.org/) - Una herramienta de código abierto que te ayuda a encontrar y corregir problemas en tu código JavaScript.

<p align="right">(<a href="#top">Volver al inicio 🔝</a>)</p>


## 🚀 Cómo Empezar
1. **Haz un Fork** o clona este repositorio

```bash
git clone git@github.com:joserafael0160/Movie-Finder.git
```

2. Instala las dependencias:

- Usé [**bun**](https://bun.sh) para instalar y gestionar las dependencias.
  
```bash
## Instala bun para MacOS, WSL & Linux:
curl -fsSL https://bun.sh/install | bash

# Instala bun para Windows:
powershell -c "iwr bun.sh/install.ps1|iex"

# Instala con bun:
bun install
```

- o puedes usar [**pnpm**](https://pnpm.io):

```bash
# Instala pnpm globalmente si no lo tienes:
npm install -g pnpm

# Instala las dependencias:
pnpm install
```

3. Ejecuta el servidor de desarrollo:

```bash
# Ejecuta con bun:
bun run dev

# Ejecuta con pnpm:
pnpm run dev
```

<p align="right">(<a href="#top">Volver al inicio 🔝</a>)</p>

## 🧞 Comandos
|      | Comando   | Acción                                         |
| :--- | :-------- | :-------------------------------------------- |
| ⚙️    | `dev`     | Inicia el servidor de desarrollo local.           |
| ⚙️    | `build`   | Genera la versión de producción en `./dist/`.    |
| ⚙️    | `lint`    | Ejecuta ESLint para encontrar problemas en tu código JavaScript. |
| ⚙️    | `preview` | Muestra una vista previa de la versión local.                      |
| ⚙️    | `predeploy` | Genera la versión de producción antes de implementarla. |
| ⚙️    | `deploy`  | Implementa el sitio en GitHub Pages desde la carpeta `dist`. |

<p align="right">(<a href="#top">Volver al inicio 🔝</a>)</p>

## 🤝 Contribuciones

¡Las contribuciones son siempre bienvenidas! Ya sea que estés informando errores, solicitando nuevas funciones o mejorando las funcionalidades existentes, tu ayuda es **muy apreciada**.

Si tienes alguna sugerencia que podría mejorar el proyecto, por favor haz un [_fork_](https://github.com/joserafael0160/Movie-Finder/fork) del repositorio y crea una [_pull request_](https://github.com/joserafael0160/Movie-Finder/pulls). También puedes simplemente abrir un [_issue_](https://github.com/joserafael0160/Movie-Finder/issues) con la etiqueta "enhancement".

Aquí tienes una guía rápida:

1. Haz un [_fork_](https://github.com/joserafael0160/Movie-Finder/fork) del Proyecto
2. Clona tu [_fork_](https://github.com/joserafael0160/Movie-Finder/fork) (`git clone <URL del fork>`)
3. Añade el repositorio original como remoto (`git remote add upstream <URL del repositorio original>`)
4. Crea tu Rama de Funcionalidad (`git switch -c feature/NuevaFuncionalidad`)
5. Realiza tus Cambios (`git commit -m 'Add: alguna NuevaFuncionalidad'`)
6. Haz Push a la Rama (`git push origin feature/NuevaFuncionalidad`)
7. Abre una [_pull request_](https://github.com/joserafael0160/Movie-Finder/pulls)

<p align="right">(<a href="#top">Volver al inicio 🔝</a>)</p>

## 🔑 Licencia
[MIT](https://github.com/joserafael0160/Movie-Finder/blob/main/LICENSE)

<p align="right">(<a href="#top">Volver al inicio 🔝</a>)</p>

## 🙏 Soporte
No olvides dejar una estrella ⭐️

<p align="right">(<a href="#top">Volver al inicio 🔝</a>)</p>

<br>
<hr>
<p align="center">✌️</p>
<p align="center">
<sub><sup>Un proyecto creado por <a href="https://github.com/joserafael0160">@joserafael0160</a></sup></sub>