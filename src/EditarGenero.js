import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import { Redirect } from 'react-router-dom';
import api from  './api';

const EditarGenero = ({match}) => {

	const [name, setName] = useState('');
	const [success, setSuccess]  =useState(false);
	
	useEffect(() => {
		api.get('/api/genres/' + match.params.id)
		.then(res => {
			setName(res.data.name);
			//console.log(res.data.data);
		});
	}, [match.params.id]);

	//console.log(match.params.id);

	const onChange = evt => {
			setName(evt.target.value);
	}

	const save = () => {
		api.put('/api/genres/' + match.params.id, {
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
			<h1>Editar Genero</h1>
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

export default EditarGenero;