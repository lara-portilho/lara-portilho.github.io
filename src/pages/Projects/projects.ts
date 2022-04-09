import { BookLoversImages } from '../../assets/projects/BookLovers'
import { NLW06Images } from '../../assets/projects/NLW06'
import { NLWHeatImages } from '../../assets/projects/NLWHeat'

export interface IProject {
	title: string
	description: string
	date: string
	languages: string[]
	github_link: string
	deployed_link?: string
	images: string[]
}

export const projects: IProject[] = [
	{
		title: 'Book Lovers',
		description:
			'A ideia desse projeto surgiu a partir de uma necessidade de organizar, de forma digital, os livros que possuo. Serviu também para praticar meus conhecimentos em React.js e conhecer um pouco mais da plataforma Firebase. Nele, é possível criar uma conta e salvar livros já lidos. Há campos para autor, coleção, e até data de início e fim da leitura, entre outros.',
		date: 'Julho de 2021',
		languages: ['Typescript', 'React.js', 'Firebase'],
		github_link: 'https://github.com/lara-portilho/book_lovers',
		deployed_link: 'https://book-lovers-5949b.web.app/',
		images: BookLoversImages
	},
	{
		title: 'Next Level Week Heat',
		description:
			'Esta aplicação foi desenvolvida durante a Next Level Week Heat, que ocorreu em outubro de 2021. Nela, foi criada uma aplicação em que era possível entrar com sua conta do GitHub e enviar mensagens para um banco de dados, que aparecem em tempo real na tela. Além disso, foi utilizado o Elixir para, ao final de cada dia, contabilizar as palavras que mais aparecem no banco de dados. ',
		date: 'Outubro de 2021',
		languages: [
			'Typescript',
			'React.js',
			'Elixir',
			'Node.js',
			'React Native'
		],
		github_link: 'https://github.com/lara-portilho/NLW_Heat-React',
		images: NLWHeatImages
	},
	{
		title: 'Next Level Week 06 (Node.js)',
		description:
			'Este projeto foi desenvolvido durante a Next Level Week 06, disponibilizada pela Rocketseat. Nele, o usuário cria uma conta e pode dar e receber elogios de outros usuários cadastrados, correlacionando-os com tags. Caso o usuário seja administrador, ele pode cadastrar outras tags.',
		date: 'Junho de 2021',
		languages: ['Typescript', 'Node.js'],
		github_link: 'https://github.com/lara-portilho/NLW-06-Node.js',
		images: NLW06Images
	}
]
