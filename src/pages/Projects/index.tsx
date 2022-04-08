import { collection, getDocs } from 'firebase/firestore'
import { getDownloadURL, listAll, ref } from 'firebase/storage'
import { useEffect, useState } from 'react'
import { firestore, storage } from '../../firebase'
import './styles.css'

interface IProject {
	id: string
	title: string
	description: string
	github_link: string
	deployed_link: string
	images: string[]
}

export default function Projects() {
	const [projects, setProjects] = useState<IProject[]>([])
	const url = [
		'https://firebasestorage.googleapis.com/v0/b/portfolio-72e6f.appspot.com/o/project_images%2FXJUBJgiGEv2WojUBxO6E%2FBook%20Lovers%20AddBook.png?alt=media&token=54980a0a-ba52-4fab-a92d-3769e00f46d5',
		'https://firebasestorage.googleapis.com/v0/b/portfolio-72e6f.appspot.com/o/project_images%2FXJUBJgiGEv2WojUBxO6E%2FBook%20Lovers%20Home.png?alt=media&token=7e1e2b67-5452-44f6-b1a7-4123d755bf98',
		'https://firebasestorage.googleapis.com/v0/b/portfolio-72e6f.appspot.com/o/project_images%2FXJUBJgiGEv2WojUBxO6E%2FBook%20Lovers%20AddBook.png?alt=media&token=54980a0a-ba52-4fab-a92d-3769e00f46d5',
		'https://firebasestorage.googleapis.com/v0/b/portfolio-72e6f.appspot.com/o/project_images%2FXJUBJgiGEv2WojUBxO6E%2FBook%20Lovers%20Home.png?alt=media&token=7e1e2b67-5452-44f6-b1a7-4123d755bf98'
	]

	useEffect(() => {
		async function getProjects() {
			try {
				let list: IProject[] = []

				const querySnapshot = await getDocs(
					collection(firestore, 'projects')
				)

				querySnapshot.forEach((doc) => {
					let imageList: string[] = []
					const docRef = ref(storage, `project_images/${doc.id}/`)

					listAll(docRef).then((res) => {
						res.items.forEach((itemRef) => {
							getDownloadURL(itemRef).then((url) => {
								imageList.push(url)
							})
						})
					})

					list.push({
						id: doc.id,
						title: doc.data().title,
						description: doc.data().description,
						github_link: doc.data().github_link,
						deployed_link: doc.data().deployed_link,
						images: imageList
					})
				})

				setProjects(list)
			} catch (err) {
				console.log(err)
			}
		}

		getProjects()
	}, [])

	return (
		<div className="container-projects">
			<div className="projects">
				{projects.map(({ id, title, images }) => (
					<div className="card" key={id}>
						<p>{title}</p>

						<hr />
						<img src={images[0]} alt={title} />
						<button onClick={() => console.log(images[0])}>
							Link: {images[0]}
						</button>

						<hr />
						<img src={url[0]} alt={title} />
						<button onClick={() => console.log(url)}>
							Link: {url[0]}
						</button>
					</div>
				))}
			</div>
		</div>
	)
}
