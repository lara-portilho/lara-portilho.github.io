import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header'

import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import About from './pages/About'
import Error from './pages/Error'

export default function Rotas() {
	return (
		<BrowserRouter basename="https://lara-portilho.github.io/">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sobre" element={<About />} />
				<Route path="/contato" element={<Contact />} />
				<Route path="/projetos" element={<Projects />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	)
}
