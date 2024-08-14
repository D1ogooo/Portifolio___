import MoonshopImage from '../../assets/fotoMoonshop.png'
import CoffeeDeliveryimagem from '../../assets/CoffeeDeliveryimagem.png'
import CadastroCamisas from '../../assets/imagem do projeto de cadastro de produtos.png'
import reactIcon from '../Projetos/img/react icon.svg'
import styledComponentsIcon from '../Projetos/img/styled-components.svg'
import tailwindIcon from '../Projetos/img/tailwindcssIcon.svg'
import jsIcon from '../Projetos/img/logo javascript.svg'
import mongodbIcon from '../Projetos/img/mongodbIcon.svg'
import typescriptIcon from '../Projetos/img/typescript-original.svg'
import fullStackImage from '../Projetos/img/siteFullstack.png'
import nodejsImage from '../Projetos/img/Node.js.svg'
import violetoImage from '../../assets/1715575530078.jpeg'
import DevstoreImage from '../../assets/DevstoreImage.jpg'
import primeiroProjetoImage from '../../pages/Projetos/img/primeiro projeto.png'
import smartwatchImage from '../Projetos/img/smart watch image.png'
import TodolistImage from '../../assets/todolist ignite image.png'
import nextIcon from '../../assets/icon_next.png'


export const DataProjects = [
 {
  id: 0,
  principalText: 'Um site de estudo de instrumentos musicais',
  img: `${fullStackImage}`,
  tech:
  [{ image: `${reactIcon}`},{ image: `${typescriptIcon}`},
  { image: `${tailwindIcon}`}, { image: `${mongodbIcon}`},
  { image: `${nodejsImage}`}],
  title: '🥁 DrumNotes',
  link_github: 'https://github.com/D1ogooo/DrumNotes',
  deploy: 'https://drum-notes-frontend.vercel.app/',
  text: "📜 A ideia do projeto é que eu possa catalogar as aulas que já assisti e também aquelas que ainda preciso assistir, mostrando meu progresso até o momento. E, claro, poder excluir, editar e adicionar as aulas, onde todas ficarão armazenadas no catalogo de cada usuário.",
 },
 {
  id: 1,
  principalText: 'Um site de uma loja de detecção de trapaças',
  img: `${MoonshopImage}`,
  tech: [{ image: `${reactIcon}`},{ image: `${typescriptIcon}`}, { image: `${styledComponentsIcon}`}],
  title: '🌑 MoonShop',
  link_github: 'https://github.com/D1ogooo/Moonshop---frontend',
  text: "MoonShop é o projeto de uma loja de screenshare, uma loja de detecção de trapaças no jogo Minecraft e FiveM temos a apresentação dos cursos da mesma e também dos contatos de suporte, neste momento apenas a parte do frontend está praticamente completa , falta ainda a responsividade e a integração com métodos de pagamentos, coisa que já é mais puxada para o lado do backend",
 },
 {
  id: 2,
  principalText: 'Cadastro de produtos',
  img: `${CadastroCamisas}`,
  tech: [{ image: `${reactIcon}`},{ image: `${jsIcon}`}, { image: `${styledComponentsIcon}`}],
  title: 'Cadastro de produtos',
  link_github: 'https://github.com/D1ogooo/Teste_Freela',
  text: "A ideia era criar um projeto de catalogo de produtos, onde o produto destaque poderia ficar no primeiro lugar e poder ser removido, a ideia era mais poder se exercitar com verificação de formulários, a ideia era principalmente exercitar meus conhecimentos com React-hook-form e Zod, que são muito usados hoje em dia por conta de sua praticidade",
  deploy: 'https://teste-freela.vercel.app/'  
},
 {
  id: 3,
  principalText: 'Um site de um cardápio digital',
  img: `${CoffeeDeliveryimagem}`,
  tech: [{ image: `${reactIcon}`},{ image: `${typescriptIcon}`}, { image: `${styledComponentsIcon}`}],
  title: '☕ Coffee delivery',
  link_github: 'https://github.com/D1ogooo/CoffeeDelivery',
  text: "O Coffee delivery é um projeto de um cardápio digital, nele eu pode exercitar meus conhecimentos sobre validação de formulários e criação de hooks, a ideia é que as pessoas possam selecionar o café desejado junto com sua quantidade e possa ver os itens dentro do carrinho de compras, no final com tudo verificado a entrega será feito ao cliente",
 },
]