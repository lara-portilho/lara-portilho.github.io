import { Icon } from '@iconify/react'
import { useState } from 'react'
import { IProject } from '../../pages/Projects/projects'

import './styles.css'

type TProps = {
	project: IProject
	modalClose: any
}

export default function Modal({ project, modalClose }: TProps) {
	const [selectedImage, setSelectedImage] = useState(0)

	return (
		<main className="modal-container">
			<div className="modal">
				<div className="modal-title">
					<h2>{project.title}</h2>
					<button className="close" onClick={modalClose}>
						<Icon icon="akar-icons:circle-x" />
					</button>
				</div>

				<div className="project-images">
					<div className="main-image">
						<img
							src={project.images[selectedImage]}
							alt={project.title}
						/>
					</div>
					<div className="carousel">
						{project.images.map((img, index) => (
							<img
								src={img}
								onClick={() => setSelectedImage(index)}
							/>
						))}
					</div>
				</div>

				<div className="project-details">
					<p>{project.description}</p>
				</div>

				<div className="project-buttons">
					{project?.deployed_link && (
						<a href={project?.deployed_link} target="_blank">
							Link para projeto
						</a>
					)}
					<a href={project.github_link} target="_blank">
						Github
					</a>
				</div>
			</div>
		</main>
	)
}
