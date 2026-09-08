// Array de datos: agrega o edita tus proyectos aquí
const projects = [
  {
    title: "Selectores Básicos",
    category: "css",
    description: "Uso de Selectores Básicos: Universal (*), de tipo o etiqueta, de clase, de identificador.",
    tech: ["HTML", "CSS"],
    link: "CSS/selectores basicos/index.html"
  },
  {
    title: "Especificidad y Cascada",
    category: "css",
    description: "Muestra cómo interactúan la especificidad (el peso numérico de los selectores) y la cascada (el orden de aparición cuando los pesos empatan) sobre un mismo botón.",
    tech: ["HTML", "CSS"],
    link: "CSS/especificidad y cascada/index.html"
  }, 
  {
    title: "Padding",
    category: "css",
    description: "El padding (relleno interior) es el espacio transparente que se genera entre el contenido de un elemento (texto, imagen, etc.) y su borde.",
    tech: ["HTML", "CSS"],
    link: "CSS/padding/index.html"
  },  
  {
    title: "Lista de tareas",
    category: "frontend",
    description: "Agregar, completar y borrar tareas.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "UI y componentes/Lista de tareas (add  complete  delete)/index.html"
  },  
 {
    title: "Modal / popup",
    category: "frontend",
    description: "Modal / popup.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "UI y componentes/modal/index.html"
  },  
  {
    title: "Acordeón / FAQ",
    category: "frontend",
    description: "Acordeón / FAQ.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "UI y componentes/acordeon/index.html"
  },
  {
    title: "E-Commerce Landing Page",
    category: "frontend",
    description: "Interfaz moderna con catálogo dinámico y carrito en LocalStorage.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/danypreisz/proyecto-frontend"
  },
  {
    title: "REST API de Autenticación",
    category: "backend",
    description: "API con endpoints seguros, generación de tokens JWT y hashing de contraseñas.",
    tech: ["Node.js", "Express", "PostgreSQL"],
    link: "https://github.com/tu-usuario/api-backend"
  },
  {
    title: "Task Manager Fullstack",
    category: "fullstack",
    description: "Panel CRUD completo conectado a una base de datos relacional.",
    tech: ["JavaScript", "Node.js", "MySQL", "CSS Grid"],
    link: "https://github.com/tu-usuario/task-manager"
  },
  {
    title: "Dashboard de Métricas",
    category: "frontend",
    description: "Visualización de estadísticas en tiempo real consumiendo APIs públicas.",
    tech: ["JavaScript", "Chart.js", "CSS Flexbox"],
    link: "https://github.com/tu-usuario/dashboard"
  },
  {
    title: "Microservicio de Notificaciones",
    category: "backend",
    description: "Servicio para procesar y despachar correos electrónicos en segundo plano.",
    tech: ["Python", "Flask", "Redis"],
    link: "https://github.com/tu-usuario/microservicio-emails"
  }
];

const grid = document.getElementById("projects-grid");
const buttons = document.querySelectorAll(".filter-btn");

// Renderizar tarjetas en el DOM
function renderProjects(filter = "all") {
  grid.innerHTML = "";

  const filtered = filter === "all" 
    ? projects 
    : projects.filter(item => item.category === filter);

  filtered.forEach(project => {
    const card = document.createElement("article");
    card.classList.add("card");

    const techTags = project.tech
      .map(t => `<span class="tag">${t}</span>`)
      .join("");

    card.innerHTML = `
      <div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </div>
      <div>
        <div class="tags">${techTags}</div>
        <div class="card-links">
          <a href="${project.link}" target="_blank" rel="noopener noreferrer">Ver Página →</a>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

// Controlar eventos de los botones de filtro
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

// Carga inicial
renderProjects();
