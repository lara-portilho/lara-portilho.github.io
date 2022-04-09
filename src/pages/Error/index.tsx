import { Link } from 'react-router-dom'
import './styles.css'

export default function Error() {
	return (
		<div className="container-error">
			<div className="titles">
				<h1>404</h1>
				<h2>Página não encontrada</h2>
			</div>

			<Link to="/">Voltar para Home &#187;</Link>
		</div>
	)
}
