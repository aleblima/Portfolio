import type { Project, NavItem } from "@/types";

export const siteConfig = {
  name: "Alejandro Lima",
  shortName: "ale",
  role: "Desenvolvedor Full Stack",
  bio: "Sou desenvolvedor full-stack Java com experiência em desenvolvimento web. Apaixonado por criar soluções elegantes e interfaces que fazem a diferença.",
  location: "Brasil",
  email: "alejandrolima1030@gmail.com",
  github: "https://github.com/aleblima",
  linkedin: "https://www.linkedin.com/in/alejandro-lima",
};

export const navItems: NavItem[] = [
  { label: "Todos", href: "#" },
  { label: "Sobre", href: "#about" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Task Manager",
    description:
      "Aplicação completa de gerenciamento de tarefas desenvolvida em Java puro, executada via terminal. Demonstra domínio de OOP, Collections e arquitetura limpa.",
    tags: ["Java", "OOP", "CLI", "Collections"],
    slug: "task-manager",
    coverImage: "/images/project-task.svg",
    repoUrl: "https://github.com/aleblima/TaskManager.git",
    year: 2026,
    color: "#7ecba1",
  },
  {
    id: 2,
    title: "Rick & Morty Wiki",
    description:
      "Wiki interativa construída com Angular consumindo a API do Rick and Morty. Interface responsiva com busca, filtros e navegação fluida entre personagens.",
    tags: ["Angular", "TypeScript", "API REST", "RxJS"],
    slug: "rick-morty-wiki",
    coverImage: "/images/project-rick.svg",
    liveUrl: "https://rick-morty-wiki-angular.vercel.app/",
    repoUrl: "https://github.com/aleblima",
    year: 2026,
    color: "#8ecae6",
  },
  {
    id: 3,
    title: "Análise de vendas",
    description: "Interface para análise de vendas",
    tags: ["Java", "Spring Boot", "SQL", "Docker"],
    slug: "analise-vendas",
    coverImage: "/images/analise-vendas.svg",
    repoUrl: "https://github.com/aleblima/Sales-analysis.git",
    year: 2026,
    color: "#8ecae6",
    status: "Em construção",
    icon: "📈"
  },
  {
    id: 4,
    title: "Gestão de marketplace",
    description: "Interface para gestão de marketplace",
    tags: ["Angular", "TypeScript", "HTML", "CSS"],
    slug: "gestao-marketplace",
    coverImage: "/images/gestao-marketplace.svg",
    repoUrl: "https://desafio-rocketseat-angular.vercel.app/login",
    year: 2025,
    color: "#8ecae6",
    icon: "📦"
  }
];

export const skills = {
  languages: ["Java", "TypeScript", "JavaScript", "HTML", "CSS"],
  frameworks: ["Angular", "React", "Next.js", "Spring Boot"],
  tools: ["Git", "VS Code", "Figma", "Vercel", "Docker"],
  concepts: ["REST APIs", "OOP", "Clean Code", "Responsive Design"],
};
