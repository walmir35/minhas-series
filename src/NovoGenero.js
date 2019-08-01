import React, { useState } from 'react';
//import axios from 'axios';
import { Redirect } from 'react-router-dom';
import api from  './api';

const NovoGenero = () => {

	const [name, setName] = useState('');
	const [success, setSuccess]  =useState(false);
	
	const onChange = evt => {
			setName(evt.target.value);
	}

	const save = () => {
		api.post('/api/genres', {
			name
		})
		.then(res => {
			//console.log(res);
			setSuccess(true);
		})
	}

	if(success){
	  return <Redirect to='/generos' />
	}

	return (
		<div className='container'>
			<h1>Novo Genero</h1>
			<form>
				<div className='form-group'>
				    <label>Name</label>
				    <input type='text' className='form-control' value={name} onChange={onChange} id='name' placeholder='name' />
				  </div>
				<button type='button' onClick={save} className='btn btn-primary'>Salvar</button>
			</form>
		</div>
	)
}

export default NovoGenero;