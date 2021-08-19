import React,{useState} from 'react'
//import {useForm} from 'react-hook-form';
import uniqid from 'uniqid'

const ListadoNombres = () => {
	const[name,setName] = useState('');
	const [listNames,setListNames]= useState([])
	const [moodEdit, setMoodEdit] = useState(false)
	const[id,setId] = useState('')


	const getName = (e) => {
		setName(e.target.value)
	}

	const addName= (event) => {
		console.log(event)
		event.preventDefault()
		const newName= {
			id:uniqid(),
			titleName:name
		}

		setListNames([...listNames,newName])
		console.log(listNames)
		setName ('') 
	}

	const deleteName = (id) => {
		const newArray = listNames.filter(item => item.id !== id)
		setListNames(newArray)
	}

	const edit= (item) => {
		setMoodEdit(true)
		setName(item.titleName)
		setId(item.id)

	}

	const editName = (e) => {
		console.log(e)
		e.preventDefault()
		const newArray = listNames.map(item => item.id === id ? {id:id,titleName:name }: item)
		setListNames(newArray)
		console.log(newArray)
	}


	return(
		<>
			<h2>Aplicacion CRUD Básica</h2>
			<div className="row">
				<div className="col">
					<h2>Listado de Nombres</h2>
					<ul className="list-group">
						{
							listNames.map(item => 
								 <li key="{item.id}" className="list-group-item">{item.titleName}
									<button className="btn btn-danger float-right" onClick={() => deleteName(item.id)}>
										Borrar
									</button>
									<button className="btn btn-info float-right" onClick={() => edit(item)}>
										Editar
									</button>
								</li>
							)
						}
					</ul>
				</div>
				<div className="col">
					<h2>Formulario de Nombres</h2>
					<form onSubmit={moodEdit? editName: addName} className="form-group">
						<input value={name} onChange={(e) => getName(e)} className="form-control mb-3" type="text" placeholder="Introduce el nombre" />
						<input 
							className="btn btn-info btn-block" 
							type="submit" 
							value={moodEdit? 'Editar Nombre':'Registrar Nombre' }
						/>
					</form>
				</div>
			</div>
		</>
	)
}

export default ListadoNombres;