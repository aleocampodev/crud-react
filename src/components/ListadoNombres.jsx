import React,{useState} from 'react'
import uniqid from 'uniqid'

const ListadoNombres = () => {
	const[name,setName] = useState('');
	const [listNames,setListNames]= useState([])

	const getName = (e) => {
		setName(e.target.value)
	}

	const addName= (event) => {
		event.preventDefault()
		const newName= {
			id:uniqid(),
			titleName:name
		}
		setListNames([...listNames,newName])
		setName ('') 
	}

	const deleteName = (id) => {
		const newArray = listNames.filter(item => item.id !== id)
	}


	return(
		<>
			<h2>Aplicacion CRUD Básica</h2>
			<div className="row">
				<div className="col">
					<h2>Listado de Nombres</h2>
					<ul className="list-group">
						{
							listNames.map((listName) => {
								return <li key="{listName.id}" className="list-group-item">{listName.titleName}</li>
								<button className="btn btn danger float-right">
									Borrar
								</button>
							})
						}
					</ul>
				</div>
				<div className="col">
					<h2>Formulario de Nombres</h2>
					<form onSubmit={(e) => addName(e)} className="form-group">
						<input value={name} onChange={(e) => getName(e)} className="form-control mb-3" type="text" placeholder="Introduce el nombre"/>
						<input className="btn btn-info btn-block" type="submit" value="Registrar nombre"/>
					</form>
				</div>
			</div>
		</>
	)
}

export default ListadoNombres;