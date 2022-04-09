import { LogosImages } from '../../assets/logos'

import './styles.css'

export default function About() {
	return (
		<div className="container-about">
			<h1>Sobre</h1>
			<div className="resumo">
				<p>
					Olá, meu nome é Lara Portilho Marques. Sou uma
					desenvolvedora júnior, com foco em desenvolvimento web
					(principalmente frontend). Atualmente sou gerente de
					projetos na empresa ELO Jr Engenharias e Arquitetura e
					estudo Engenharia de Computação na UFG. Apesar de ser jovem
					no mundo da programação, estou sempre em busca de aprender
					novas tecnologias e estar em constante desenvolvimento.
				</p>

				<p>
					Tenho conhecimento em diversas linguagens de programação,
					como JavaScript, TypeScript e a biblioteca React para
					desenvolvimento web, além das aprendidas durante a
					faculdade, como C e Java.
				</p>

				<div className="images">
					<div>
						<span>Linguagens</span>
						<div className="logo-images">
							<img src={LogosImages.react} alt="React Logo" />
							<img
								src={LogosImages.typescript}
								alt="Typescript Logo"
							/>
							<img src={LogosImages.c} alt="C Logo" />
						</div>
					</div>

					<div>
						<span>Formação e Experiências</span>
						<div className="logo-images">
							<img src={LogosImages.ufglogo} alt="UFG Logo" />
							<img src={LogosImages.elo} alt="ELO Jr Logo" />
						</div>
					</div>
				</div>
			</div>

			<ul className="linha-do-tempo">
				<div className="marcador"></div>
				<li className="ano">
					<p>2022</p>
				</li>

				<li className="item">
					<p>
						Fui promovida à Gerente de Projetos na ELO Jr, sendo
						responsável agora por acompanhar todos os projetos
						relativos ao meu núcleo da empresa. Iniciei a
						implementação da metodologia ágil Scrum para o
						desenvolvimento dos sites e sistemas web para nossos
						clientes.
					</p>
				</li>
				<li className="item empty">
					<p></p>
				</li>

				<li className="ano">
					<p>2021</p>
				</li>

				<li className="item">
					<p>
						Durante o meu período como desenvolvedora, concluí
						diversos cursos de <i>soft skills</i> e{' '}
						<i>hard skills</i>. Aprendi desenvolvimento web, HTML,
						CSS, JavaScript e TypeScript, React e Node, além de
						continuar me aprimorando em C e Java pela faculdade.
					</p>
				</li>

				<li className="item">
					<p>
						Comecei a trabalhar na ELO Jr Engenharias e Arquitetura,
						uma empresa júnior cujo foco é desenvolvimento e
						vivência empresarial. Nela, obtive habilidades tanto
						técnicas como sociais e de gerenciamento.
					</p>
				</li>

				<li className="ano">
					<p>2020</p>
				</li>

				<li className="item">
					<p>
						Ingressei na Universidade Federal de Goiás para
						Engenharia de Computação. No entanto, o curso que era
						para começar no segundo semestre foi adiado para ter
						início em 2021. Com isso, comecei minha jornada no mundo
						da programação em C com disciplinas ofertadas pela
						faculdade para os prejudicados pela pandemia.
					</p>
				</li>

				<li className="item empty">
					<p></p>
				</li>
			</ul>
		</div>
	)
}
