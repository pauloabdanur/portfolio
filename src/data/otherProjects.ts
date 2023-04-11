import { Project } from '../types/Project';
import todoGif from '../assets/gifs/todo.gif';
import photoGallery from '../assets/gifs/gallery.gif';
import reduxCounter from '../assets/gifs/counter.gif';

export const otherProjects: Project[] = [
  {
    name: 'To Do List',
    description:
      'Aplicação de lista de tarefas utilizada para organizar sua rotina e estipular objetivos/tarefas. Foi desenvolvido utilizando Local Storage, portanto mesmo atualizando o navegador as informações permanecerão salvas.',
    imageUrl: todoGif,
    techs: ['React', 'TypeScript', 'Styled Components', 'Local Storage'],
    githubLink: 'https://github.com/pauloabdanur/todo-list',
    demoLink: 'https://pauloabdanur.github.io/todo-list/',
  },
  {
    name: 'Photo Gallery',
    description:
      'Uma galeria de fotos utilizando a plataforma Google Firebase onde é possível fazer upload de fotos e também deletá-las.',
    imageUrl: photoGallery,
    techs: ['React', 'TypeScript', 'Styled Components', 'Firebase', 'uuid'],
    githubLink: 'https://github.com/pauloabdanur/photo-gallery',
    demoLink: 'https://github.com/pauloabdanur/photo-gallery',
  },
  {
    name: 'Redux Counter',
    description:
      'Uma aplicação simples de um contador utilizando Redux para manipular estados, possui botões para incrementar e decrementar a contagem.',
    imageUrl: reduxCounter,
    techs: ['React', 'TypeScript', 'Styled Components', 'Redux'],
    githubLink: 'https://github.com/pauloabdanur/Redux-Counter',
    demoLink: 'https://pauloabdanur.github.io/Redux-Counter/',
  },
];
