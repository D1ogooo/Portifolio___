import primeiroProjetoImage from '../../pages/Projetos/img/primeiro projeto.png'
import { SiStyledcomponents } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

// import segundoProjetoImage from '../../assets/'
// import terceiroProjetoImage from '../../assets/'

export const DataProjects = [
 {
  id: 0,
  img: `${primeiroProjetoImage}`,
  tech: [{ image: <SiStyledcomponents/> },{ image: <SiReact/> },{ image: <BiLogoTypescript/> }],
  title: 'Food jp',
  text: "Desenvolvimento web com foco em React",
 },
//  {
//   id: 1,
//   img: `${SecondImageSevico}`,
//   tech: [{''},{''},{''}],
//   title: '',
//   text: "Consigo replicar seu layout",
//  },
//  {
//   id: 2,
//   img: `${ThirdImageSevico}`,
//   tech: [{''},{''},{''}],
//   title: '',
//   text: "Sites que se adequam a cada dispositívo",
//  },
]