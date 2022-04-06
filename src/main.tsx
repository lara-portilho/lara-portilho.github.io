import React from 'react'
import ReactDOM from 'react-dom'
import Rotas from './Rotas'

import './index.css'
import mandala from './assets/mandala.png'

ReactDOM.render(
	<React.StrictMode>
		<img src={mandala} alt="" className="mandala-1" />
		<img src={mandala} alt="" className="mandala-2" />
		<Rotas />
	</React.StrictMode>,
	document.getElementById('root')
)
