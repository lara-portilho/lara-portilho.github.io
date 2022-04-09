import { Link } from 'react-router-dom'
import './styles.css'

export default function Home() {
	return (
		<div className="container-home">
			<div className="titles">
				<h1>Lara Portilho Marques</h1>
				<h2>Desenvolvedora Júnior</h2>
			</div>

			<div className="home-links">
				<Link to="/sobre">Sobre &#187;</Link>
				<Link to="/projetos">Projetos &#187;</Link>
				<Link to="/contato">Contato &#187;</Link>
			</div>
		</div>
	)
}
