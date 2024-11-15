import { useParams } from "react-router-dom";
import { Container, PaiCards, Left, Right, TechStyle } from "./style";
import {
	FirstButton,
	SecondButton,
	Return,
	SecondLeft,
	FirstLeft,
} from "./style";
import { DataProjects } from "./data";
import setaLeftUp from "../../assets/ArrowUpRight.svg";
import GlobeSimple from "../../../src/pages/Projetos/img/GlobeSimple.svg";
import GithubLogo from "../../assets/logo-github 1.svg";
import ReturnImage from "../../assets/ArrowLeft.svg";

export const Detail = () => {
	const { id } = useParams();
	const project = DataProjects.find((project) => project.id === Number(id));

	if (!project) {
		return <p>Projeto não encontrado</p>;
	}

	return (
		<Container>
			<PaiCards>
				<Left>
					<FirstLeft>
						<Return to="/">
							<img src={ReturnImage} alt="" />
						</Return>
						<img src={project.img} alt="" />
					</FirstLeft>

					<SecondLeft>
						<TechStyle>
							{project.tech.map((tech) => (
								<img src={tech.image} key={tech} alt="" />
							))}
						</TechStyle>
						<h2>{project.title}</h2>
						<h3>
							<span>Minha função:</span> Desenvolvedor Frontend
						</h3>
						<p>{project.text}</p>
					</SecondLeft>
				</Left>
				<Right>
					<h2>Dê uma olhada nesse projeto</h2>
					{project.deploy && (
						<FirstButton target="_blank" href={project.deploy}>
							<img src={GlobeSimple} alt="" />
							Demonstração
							<img src={setaLeftUp} alt="" />
						</FirstButton>
					)}
					<SecondButton href={project.link_github} target="_blank">
						<img src={GithubLogo} alt="" />
						Código
						<img src={setaLeftUp} alt="" />
					</SecondButton>
				</Right>
			</PaiCards>
		</Container>
	);
};
