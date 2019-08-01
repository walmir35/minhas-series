import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';
import api from  './api';

const Generos = () => {
	const [data, setData]  =useState([]);

	useEffect(() => {
		api.get('/api/genres')
		.then(res => {
			setData(res.data.data);
			console.log(res.data.data);
		});
	}, []);

	const renderizalinha = record => {
		return (
			<tr key={record.id}>
		      <th scope='row'>{record.id}</th>
		      <td>{record.name}</td>
		      <td>
		      	<button className='btn btn-danger btn-sm' onClick={() => deleteGenero(record.id)}>Remover</button>
		      	<Link to={'/generos/' + record.id} className='btn btn-warning btn-sm'>Editar</Link>
		      </td>
		    </tr>
		)
	}

	const deleteGenero = id => {
		api.delete('/api/genres/' + id)
		.then(res => {
			//setData(res.data.data);
			const filtrado = data.filter(item => item.id !==id);
			setData(filtrado);
		});
	}

	if(data.length === 0){
		return (
			<div className='container'>
    			<h1>Generos</h1>
    			<Link to='/generos/novo' className='btn btn-primary'>Adicionar</Link>
    			<div className="alert alert-danger" role="alert">
				  Nenhum Genero Cadastrado!
				</div>
    		</div>
		)
	}

	
    return (
    	<div className='container'>
    	<h1>Generos</h1>
    	<Link to='/generos/novo' className='btn btn-primary'>Adicionar</Link>
    	<p></p>
    	<table className='table table-dark'>
		  <thead>
		    <tr>
		      <th scope='col'>ID</th>
		      <th scope='col'>NOME</th>
		      <th scope='col'>Ações</th>

		    </tr>
		  </thead>
		  <tbody>
		    {data.map(renderizalinha)}
		   </tbody>
		  </table>
    	</div>
    	)
}

export default Generos;