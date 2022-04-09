import { projects, IProject } from './projects'
import Modal from '../../components/Modal'
import './styles.css'
import { useState } from 'react'

export default function Projects() {
	const [showModal, setShowModal] = useState(false)
	const [selectedProject, setSelectedProject] = useState<IProject>()

	function toggleModal(proj: IProject) {
		setShowModal(!showModal)
		setSelectedProject(proj)
	}

	return (
		<div className="container-projects">
			<h1>Projetos</h1>
			<div className="projects">
				{projects.map((project, index) => (
					<div
						className="card"
						key={index}
						onClick={() => {
							toggleModal(project)
						}}
					>
						<img src={project.images[0]} alt={project.title} />
						<h3>{project.title}</h3>
					</div>
				))}
			</div>

			{showModal && (
				<Modal project={selectedProject!} modalClose={toggleModal} />
			)}
		</div>
	)
}
