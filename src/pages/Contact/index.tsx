import { toast } from 'react-toastify'
import { Icon } from '@iconify/react'
import emailjs from '@emailjs/browser'
import './styles.css'
import { useState } from 'react'

export default function Contact() {
	const [loading, setLoading] = useState(false)

	function sendEmail(e: any) {
		e.preventDefault()
		setLoading(true)

		emailjs
			.sendForm(
				'gmail',
				'template_gmail',
				'#form',
				import.meta.env.VITE_APP_EMAILJS_USER_ID
			)
			.then(() => {
				toast.success('Enviado!')
				e.target.reset()
			})
			.catch((err) => {
				toast.success('Houve algum erro')
				console.log(err)
			})
			.finally(() => {
				setLoading(false)
			})
	}

	return (
		<div className="container-contact">
			<section>
				<form onSubmit={sendEmail} id="form">
					<label htmlFor="name">Seu nome</label>
					<input
						id="name"
						type="text"
						name="from_name"
						placeholder="Seu Nome"
						required
					/>

					<label htmlFor="email">Seu e-mail</label>
					<input
						id="email"
						type="email"
						name="reply_to"
						placeholder="exemplo@exemplo.com"
						required
					/>

					<label htmlFor="subject">Assunto</label>
					<input
						id="subject"
						type="text"
						name="subject"
						placeholder="Assunto"
						required
					/>

					<label htmlFor="message">Mensagem</label>
					<textarea
						id="message"
						name="message"
						placeholder="Mensagem aqui"
						required
					/>

					<button type="submit" disabled={loading}>
						{loading ? '...' : 'Enviar'}
					</button>
				</form>

				<div className="social-medias">
					<h2>Redes sociais</h2>

					<div>
						<a
							href="https://www.linkedin.com/in/lara-portilho-marques/"
							target="_blank"
						>
							<Icon
								icon="akar-icons:linkedin-box-fill"
								width={70}
								color="#e6e6e6"
							/>
						</a>

						<a
							href="https://github.com/lara-portilho"
							target="_blank"
						>
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
