import React from 'react'
import PropoTypes from 'prop-types'


const PrimeraApp = ({ saludo, subtitulo }) => {

	
//console.log(props)	

	return (
		<>
			<h1>{ saludo }</h1>
			<h2>{   }</h2>
			<p>{subtitulo}</p>
		</>
	)

}


PrimeraApp.PropoTypes = {
	saludo:PropoTypes.string.isRequired
}


PrimeraApp.defaultProps =
{ 
	subtitulo: "subtitulo"
}

export default PrimeraApp