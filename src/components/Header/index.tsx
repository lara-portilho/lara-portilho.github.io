import { Link } from 'react-router-dom'

import './styles.css'

export default function Header() {
	return (
		<div className="header">
			<Link to="/" className="logo">
				Lara Portilho Marques | Dev Júnior
			</Link>

			<nav className="menu">
				<label htmlFor="hamburger">&#9776;</label>
				<input type="checkbox" id="hamburger" />

				<div className="links">
					<Link to="/" className="home-link">
						Home
					</Link>
					<Link to="/sobre">Sobre</Link>
					<Link to="/projetos">Projetos</Link>
					<Link to="/contato">Contato</Link>
				</div>
			</nav>
		</div>
	)
}
