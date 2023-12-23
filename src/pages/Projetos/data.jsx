import primeiroProjetoImage from '../../pages/Projetos/img/primeiro projeto.png'
import smartwatchImage from '../Projetos/img/smart watch image.png'
import TodolistImage from '../../assets/todolist ignite image.png'

import reactIcon from '../Projetos/img/react icon.svg'
import styledComponentsIcon from '../Projetos/img/styled-components.svg'
import jsIcon from '../Projetos/img/logo javascript.svg'
import typescriptIcon from '../Projetos/img/typescript-original.svg'

export const DataProjects = [
 {
  id: 0,
  principalText: 'Um cardápio fictício de um site de lanches',
  img: `${primeiroProjetoImage}`,
  tech: [{ image: `${reactIcon}`},{ image: `${typescriptIcon}`}, { image: `${styledComponentsIcon}`}],
  title: 'Food jp',
  link_github: 'https://github.com/D1ogooo/FoodJP',
  text: "Esse foi um projeto desenvolvido em React onde fiz um um clone de um site de uma lanchonete cha um clone de um site de uma lanchonete cha um clone de um site de uma lanchonete cha um clone de um site de uma lanchonete cha um clone de um site de uma lanchonete cha clone de um site de uma lanchonete chamada FoodJP, a ideia era exercitar minhas habilidades com typescript e react onde trazem mais versatilidade para o software, ao lado deixo o código e o site no ar",
 },
 {
  id: 1,
  principalText: 'Um site fictício de avaliação do smartwatch',
  img: `${smartwatchImage}`,
  tech: [{ image: `${reactIcon}`},{ image: `${typescriptIcon}`}],
  title: 'SmartWatch',
  link_github: 'https://github.com/D1ogooo/SmartWatch',
  text: "Esse projeto foi um desafio semanal chamado SmartWatch , foi feito para poder exercitar minhas hábilidades com React a ideia era criar um pequeno card de avaliação do smartwatch",
 },
 {
  id: 2,
  principalText: 'Um todolist para guardar suas tarefas',
  img: `${TodolistImage}`,
  tech: [{ image: `${reactIcon}`},{ image: `${jsIcon}`}],
  title: 'Todo list',
  link_github: 'https://github.com/D1ogooo/TodoList-ignite',
  text: "Esse projeto foi feito para poder exercitar meus conhecimentos em React e styled componentsm onde pode aprender sobre o poder do React e mais especificamente dos Hooks de gerenciamento de estados",
 },
]