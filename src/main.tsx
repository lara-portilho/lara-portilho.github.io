import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Rotas from './Rotas'
import 'dotenv/config'
import './index.css'
import mandala from './assets/mandala.png'

ReactDOM.render(
	<React.StrictMode>
		<ToastContainer autoClose={3000} />
		<img src={mandala} alt="" className="mandala-1" />
		<img src={mandala} alt="" className="mandala-2" />
		<Rotas />
	</React.StrictMode>,
	document.getElementById('root')
)
