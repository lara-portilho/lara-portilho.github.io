import { Icon } from '@iconify/react'
import './styles.css'

export default function Contact() {
	return (
		<div className="container-contact">
			<section>
				<form>
					<label htmlFor="email">Seu e-mail</label>
					<input id="email" type="email" name="email" />

					<label htmlFor="subject">Assunto</label>
					<input id="subject" type="text" name="subject" />

					<label htmlFor="message">Mensagem</label>
					<textarea id="message" name="message" />

					<button type="submit">Enviar</button>
				</form>

				<div className="social-medias">
					<h2>Redes sociais</h2>

					<div>
						<a href="https://www.linkedin.com/in/lara-portilho-marques/">
							<Icon
								icon="akar-icons:linkedin-box-fill"
								width={70}
								color="#e6e6e6"
							/>
						</a>

						<a href="https://github.com/lara-portilho">
							<Icon
								icon="akar-icons:github-fill"
								width={70}
								color="#e6e6e6"
							/>
						</a>
					</div>
				</div>
			</section>
		</div>
	)
}
