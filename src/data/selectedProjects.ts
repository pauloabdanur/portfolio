import { Project } from '../types/Project';
import buscadorGif from '../assets/gifs/buscador.gif';
import expense from '../assets/gifs/expense.gif';
import complexForm from '../assets/gifs/form.gif';
import movieGallery from '../assets/gifs/movies.gif';
import rpgTemplate from '../assets/gifs/rpg.gif';
import parallax from '../assets/gifs/parallax.gif';

export const selectedProjects: Project[] = [
  {
    name: 'Buscador de CEP',
    description:
      "Aplicação utilizada para a busca de CEP's de todo o Brasil utilizando a API ViaCEP.",
    imageUrl: buscadorGif,
    techs: ['React', 'React Icons', 'Axios', 'REST API'],
    githubLink: 'https://github.com/pauloabdanur/buscador-cep',
    demoLink: 'https://pauloabdanur.github.io/buscador-cep/',
  },
  {
    name: 'Expense Tracker',
    description:
      'Aplicação utilizada para controle de despesas, com ela você pode adicionar suas receitas e despesas, informando a categoria, data, valor e o sistema irá computar os dados e exibir o balanço mensal.',
    imageUrl: expense,
    techs: ['React', 'TypeScript', 'Styled Components'],
    githubLink: 'https://github.com/pauloabdanur/expense-tracker',
    demoLink: 'https://pauloabdanur.github.io/expense-tracker/',
  },
  {
    name: 'Complex Form',
    description:
      'Um formulário multi-etapas de cadastro de desenvolvedor utilizando React Router, onde o usuário irá inserir seus dados e seguir um passo a passo para concluir seu cadastro. Ao final do processo é apresentado ao usuário um resumo com as informações inseridas.',
    imageUrl: complexForm,
    techs: ['React', 'TypeScript', 'Styled Components', 'React Router'],
    githubLink: 'https://github.com/pauloabdanur/complex-form',
    demoLink: 'https://pauloabdanur.github.io/complex-form/',
  },
  {
    name: 'Movie Gallery',
    description:
      'Uma galeria de filmes utilizando a API "The Movie Database". Na página principal são exibidos os filmes com as melhores notas e também é possível realizar buscas pelo nome do filme desejado. É possível selecionar um filme para visualizar detalhes como a sinopse, orçamento e receita.',
    imageUrl: movieGallery,
    techs: [
      'React',
      'TypeScript',
      'Styled Components',
      'React Router',
      'REST API',
    ],
    githubLink: 'https://github.com/pauloabdanur/Movies-Gallery',
    demoLink: 'https://pauloabdanur.github.io/Movies-Gallery/',
  },
  {
    name: 'Parallax Website Template',
    description:
      'Um site template que utiliza o efeito Parallax, feito através de um custom hook "useParallax" que altera as posições das imagens via props de acordo com o movimento de scroll do usuário.',
    imageUrl: parallax,
    techs: ['React', 'TypeScript', 'Styled Components', 'React Hooks'],
    githubLink: 'https://github.com/pauloabdanur/Parallax-template',
    demoLink: 'https://pauloabdanur.github.io/Parallax-template/',
  },
  {
    name: 'RPG Template',
    description:
      'Um template de jogo RPG onde é possível movimentar o personagem dentro das limitações do mapa.',
    imageUrl: rpgTemplate,
    techs: ['React', 'TypeScript', 'Styled Components', 'React Hooks'],
    githubLink: 'https://github.com/pauloabdanur/RPG-template',
    demoLink: 'https://pauloabdanur.github.io/RPG-template/',
  },
];
