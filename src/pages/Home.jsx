import {
	Container,
	LeftContentFirst,
	RightContentFirst,
	InternalLeft,
	Seta1,
	RightSecond,
	LeftSecond,
	FirstChild,
	SecondChild,
	SecondContainer,
	Abc,
} from "./style";
import { Main, MainFirst, MainSecond, Links } from "./style";
import { Footer } from "../components/Footer";
import { MainThird } from "../components/CardProjects";
import { MainFor } from "../components/CardContact";
import { MeuResumo } from "../components/Meu resumo";
import GirlAndCat from "../assets/design girl bro.svg";
import CurriculoImage from "../assets/ReadCvLogo.png";
import setaDireitaImage from "../assets/ArrowRight.svg";
import imagemPrincipal from "../assets/imagem principal da mao com pc.svg";
import SetaParaBaixo from "../assets/Graphic.svg";
import pythonicon from "../assets/python icon.svg";
import jsicon from "../assets/js icon.svg";
import reacticon from "../pages/Projetos/img/react icon.svg";
import tailwindicon from "../assets/tailwind icon.svg";
import nodeicon from "../assets/node icon.svg";

function Home() {
	return (
		<>
			<Container id="home">
				<Main>
					<MainFirst>
						<LeftContentFirst>
							<InternalLeft>
								<h1>Olá, eu sou o Diogo</h1>
								<h2>Desenvolvedor Frontend</h2>
								<p>
									Com 3 anos de experiência em Desenvolvimento web, Sou focado
									em Frontend com conhecimentos em Backend
								</p>
								<Links>
									<a href="#sobremin" className="first_button">
										<span className="text">Meu resumo</span>
										<span className="icon">
											<img src={CurriculoImage} alt="" />
										</span>
									</a>
									<a href="#footer" className="second_button">
										<span className="text">Entrar em contato</span>
										<span className="icon">
											<img src={setaDireitaImage} alt="" />
										</span>
									</a>
									<Seta1>
										<img src={SetaParaBaixo} id="imagem_setaprabaixo" alt="" />
									</Seta1>
								</Links>
							</InternalLeft>
						</LeftContentFirst>
						<RightContentFirst>
							<img src={imagemPrincipal} alt="" />
						</RightContentFirst>
					</MainFirst>

					<SecondContainer id="about">
						<MainSecond>
							<RightSecond>
								<img src={GirlAndCat} alt="" />
							</RightSecond>
							<LeftSecond>
								<FirstChild>
									<img src={jsicon} alt="" />
									<img src={reacticon} alt="" />
									<img src={nodeicon} alt="" />
									<img src={tailwindicon} alt="" />
									<img src={pythonicon} alt="" />
								</FirstChild>
								<SecondChild id="sobremin">
									<p>Sobre mim</p>
									<h2>
										Sou um Desenvolvedor apaixonado pela programação e estou em
										busca da minha primeira vaga
									</h2>
									<h3>
										Desde criança, sempre gostei de criar coisas. Sou apaixonado
										por T.I e muito voltado para programação web, amo bastante a
										música e tocar bateria. Tenho uma paixão por teclado e nos
										tempos vagos, crio projetos e estudo para evoluir na área.
										Sou uma pessoa bastante observadora e acabo tendo ideias de
										projetos até com coisas do dia a dia. Pode-se dizer que sou
										bastante criativo.
									</h3>
								</SecondChild>
								<Abc>
									<MeuResumo />
								</Abc>
							</LeftSecond>
						</MainSecond>
					</SecondContainer>
					<MainThird />
					<MainFor />
				</Main>
				<Footer />
			</Container>
		</>
	);
}

export default Home;
