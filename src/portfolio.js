import emoji from "react-easy-emoji";

import municipalidad from "./assets/img/icons/common/municipalidad.png";
import cv from "./assets/resume/cv.pdf";

export const greetings = {
  name: "Matias Bussetti",
  title: "Hola, soy Matias",
  description:
    "Me llamo Matías y soy desarrollador Web Full Stack Jr., estudio en la Universidad Provincial del Sudoeste. Tengo experiencia en la creación de aplicación web utilizado tecnologías tales como REACT (frontend) y Laravel (backend), y migrando estas misma a un entorno de la web (Hosting compartido o Shared Hosting), utilizado SSH.",
  resumeLink: cv,
};

export const openSource = {
  githubUserName: "Matias-Bussetti",
};

export const contact = { location: "bahia blanca" };

export const socialLinks = {
  facebook: "https://www.facebook.com/matiasezequiel.bussetti",
  instagram: "https://www.instagram.com/bussettimatias/",
  github: "https://github.com/Matias-Bussetti",
  linkedin: "https://www.linkedin.com/in/matias-ezequiel-bussetti-82a9531a2/",
};

export const skillsSection = {
  title: "Mis Conocimientos",
  //subTitle: "Programador Autodidacta y creativo",
  skills: [
    "Habilidades Blandas",
    emoji("⚡ Proactivo"),
    emoji("⚡ Creativo"),
    emoji("⚡ Critico"),
    emoji("⚡ Flexible"),
    emoji("⚡ Resolutivo"),
    emoji("⚡ Autodidacta"),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "logos:sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "Vue",
      fontAwesomeClassname: "vscode-icons:file-type-vue",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },
    {
      skillName: "Sql",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },
    {
      skillName: "MySql",
      fontAwesomeClassname: "vscode-icons:file-type-mysql",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "vscode-icons:file-type-php",
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "logos:laravel",
    },
    {
      skillName: "SSH",
      fontAwesomeClassname: "logos:terminal",
    },
    {
      skillName: "JSON",
      fontAwesomeClassname: "logos:json",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "80", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "80",
  },
  {
    Stack: "Programación",
    progressPercentage: "100",
  },
  {
    Stack: "Creatividad",
    progressPercentage: "100",
  },
];

export const educationInfo = [
  {
    schoolName: "Escuela Técnica N°2 Ing. Cesar Cipolletti, Bahía Blanca",
    subHeader: "Técnico en Informática Personal y Profesional",
    duration: "2013 - 2019",
    /*desc: "Participated in the research of XXX and published 3 papers.",
    descBullets: [
      "Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],*/
  },
  {
    schoolName: "Universidad Provincial del Sudoeste, Pigue",
    subHeader: "Tecnicatura en Desarrollo de Aplicaciones Web (Primer Año)",
    duration: "2021",
    /*
    desc: "Participated in the research of XXX and published 3 papers.",
    descBullets: [
      "Lorem ipsum dolor sit amet, consectetfgur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],*/
  },
];

export const experience = [
  {
    role: "Pasantía: Desarrollador Web",
    company: "Municipalidad de Bahía Blanca",
    companylogo: municipalidad,
    date: "Junio 2019 – Septiembre 2019",
    desc: "En un periodo de 50 días se me dio la tarea de realizar un sistema (ABM) de infracciones semanales. El desarrollo del sistema fue en el FrameWork de Laravel 6.8. En las primeras 3 semanas se me capacitó para	poder usar el framework mencionado. El sistema cuenta con api donde se exporta la información en formato JSON.",
    /*descBullets: [
      "Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],*/
  },
];

export const projects = [
  {
    name: "GabiBianchiFitCoach",
    desc: "Sistema de clases realizado para GabiBianchiFitCoach, en el cual en este puedan administrar sus clientes y a estos poder entregarles el link de Zoom de forma automatizada",
    link: "https://gabibianchifitcoach.com.ar/",
  },
  {
    name: "GabiBianchiFitCoach v2",
    desc: "Actualmente trabajo en una segunda versión de lo anterior la cual, en vez de utilizar Laravel para el Backend y Frontend, utilizo React para el frontend y con laravel creo una api la cual pueda funcionar tanto para el frontend como para una aplicación móvil futura",
    link: "http://digbfctest.site/",
  },

  {
    name: "BahiaDomotica",
    desc: "He actualizado la página de bienvenida, haciendo que esta sea responsive, haciendo un trabajo de SEO (keywords). El resultado de estos cambios: el dueño fue contactado por 2 clientes cerrando una venta a uno de estos",
    link: "http://www.bahiadomotica.com.ar/",
  },
  {
    name: "Tangaroaentrenamiento",
    desc: "E-commerce que utiliza un checkout de PayPal, hecho con Laravel (api) y Vue, realizado para un gimnasio de Bahía Blanca",
    //link: "http://www.tangaroaentrenamiento.com/",
    github: {
      link: "https://github.com/Matias-Bussetti/tangaroa-sistema",
    },
  },
  {
    name: "Js Drag and Drop To Do List",
    desc: "Lista de tareas desarrollado con JavaScript, la cual te permite crear listas de ejercicios y en estos guardar la cantidad de repeticiones.",
    demo: "https://matias-bussetti.github.io/JS-Drag-and-Drop-To-Do-List/",
    github: {
      link: "https://github.com/Matias-Bussetti/JS-Drag-and-Drop-To-Do-List",
    },
  },
];

export const feedbacks = [
  {
    name: "GabiBianchiFitCoach",
    feedback:
      "Yo Martin Parmigiani, como cofundador del emprendimiento Gabi Bianchi Fitcoach, y como responsable del sector de multimedia, celebro el haber contratado los servicios del Programador Matías Bussetti. Se le requirió que lograra una página web, que le resulte amigable al lector, al cliente y a los administradores de dicha pág.  Que tenga un diseño moderno y que sirviera para gestionar los ingresos y egresos. Estos objetivos fueron alcanzados gracias a que desde el primer contacto ha demostrado  predisposición al trabajo en equipo, al adaptarse a los cambios que se le requirió en la búsqueda de un mejor posicionamiento de la Marca para que este fuera de forma creciente. Ya que de manera urgente nos tuvimos que reinventar en el inicio de la pandemia de COVID-19. Supo asesorar desde su conocimiento y busco a su vez capacitarse para poder llegar al pedido por el cual se lo contrató.",
  },
  {
    name: "Tangaroa Entrenamiento",
    feedback:
      "Matías fue súper expeditivo y dispuesto desde el primer día, entendió a la perfección lo que buscábamos y necesitábamos y resolvió la web con rapidez y creatividad. Quedamos más que satisfechos y sin dudarlo volveríamos a llamarlo. Cien por ciento recomendable.",
  },
];
