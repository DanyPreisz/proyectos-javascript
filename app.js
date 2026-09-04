// Array de datos: agrega o edita tus proyectos aquí
const projects = [
  {
    title: "E-Commerce Landing Page",
    category: "frontend",
    description: "Interfaz moderna con catálogo dinámico y carrito en LocalStorage.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/tu-usuario/proyecto-frontend"
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
          <a href="${project.link}" target="_blank" rel="noopener noreferrer">Ver Código →</a>
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
