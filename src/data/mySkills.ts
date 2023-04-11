import { ISkills } from '../types/ISkills';
import htmlIcon from '../assets/icons/html-icon.png';
import cssIcon from '../assets/icons/css3-icon.png';
import javascriptIcon from '../assets/icons/javascript-icon.png';
import reactIcon from '../assets/icons/react-icon.png';
import tsIcon from '../assets/icons/ts-icon.png';
import nodeIcon from '../assets/icons/node-icon.png';
import mongodbIcon from '../assets/icons/mongodb-icon.png';
import sqlIcon from '../assets/icons/sql-icon.png';
import graphqlIcon from '../assets/icons/graphql-icon.png';
import githubIcon from '../assets/icons/github-icon.png';
import scIcon from '../assets/icons/sc-icon.png';
import figmaIcon from '../assets/icons/figma-icon.png';

export const mySkills: ISkills[] = [
  {
    name: 'HTML5',
    description:
      'HMTL é uma linguagem de marcação utilizada na construção de páginas na Web.',
    iconUrl: htmlIcon,
  },
  {
    name: 'CSS3',
    description:
      'CSS é uma linguagem utilizazda para dar estilo ao código criado por linguagens como HTML. De forma prática, ela funciona como uma camada de personalização ao conteúdo visível.',
    iconUrl: cssIcon,
  },
  {
    name: 'Javascript',
    description:
      'JavaScript é uma linguagem de script orientada a objetos, multiplataforma. O Javascript pode ser ligado aos objetos de navegador web para prover um controle programático sobre eles.',
    iconUrl: javascriptIcon,
  },
  {
    name: 'Typescript',
    description:
      'TypeScript é uma extensão do JavaScript. Ela adiciona recursos avançados ao JavaScript, como a tipagem estática e interfaces, tornando mais fácil detectar e prevenir erros durante a fase de desenvolvimento.',
    iconUrl: tsIcon,
  },
  {
    name: 'ReactJS',
    description:
      'React é um framework JavaScript usado para criar interfaces de usuário (UI) em aplicativos web. Ele é usado por muitas empresas de tecnologia, incluindo o Facebook, Instagram e Airbnb.',
    iconUrl: reactIcon,
  },
  {
    name: 'NodeJS',
    description:
      'NodeJS é um ambiente de execução JavaScript que permite executar aplicações de forma autônoma, sem depender de um navegador. Também pode ser utilizado no desenvolvimento de APIs e como backend de aplicativos web.',
    iconUrl: nodeIcon,
  },
  {
    name: 'MongoDB',
    description:
      'O MongoDB é um banco de dados não-relacional orientado a documentos — ou seja, que não se utiliza de tabelas e colunas pré-definidas, mas armazena documentos em formato JSON.',
    iconUrl: mongodbIcon,
  },
  {
    name: 'SQL',
    description:
      'SQL é uma linguagem padrão de gerenciamento de dados que interage com os principais bancos de dados baseados no modelo relacional. O SQL é usado para criar, inserir, atualizar, excluir e consultar as informações armazenadas na base',
    iconUrl: sqlIcon,
  },
  {
    name: 'GraphQL',
    description:
      'GraphQL é uma linguagem de consulta e ambiente de execução voltada a APIs cuja prioridade é fornecer exatamente os dados que os clientes solicitam e nada além. Foi desenvolvido para tornar as APIs mais rápidas, flexíveis e intuitivas.',
    iconUrl: graphqlIcon,
  },
  {
    name: 'Github',
    description:
      'GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. É como uma plataforma social colaborativa, onde programadores e empresas colocam seus projetos para o desenvolvimento do código.',
    iconUrl: githubIcon,
  },
  {
    name: 'Styled Components',
    description:
      'O Styled Components é uma biblioteca do React e do React Native que nos permite criar componentes de estilo ao escrever códigos CSS dentro de um arquivo JavaScript.',
    iconUrl: scIcon,
  },
  {
    name: 'Figma',
    description:
      'Figma é uma ferramenta de design baseada em vetor. É muito utilizada na prototipagem de interfaces web e mobile, onde é possível simular a interação do usuário com a interface, facilitando assim os processos de UX design.',
    iconUrl: figmaIcon,
  },
];
