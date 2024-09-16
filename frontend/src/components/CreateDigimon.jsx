import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/digimon'
const CreateDigimon = () => {

    const [name, setName] = useState('')
    const [img, setImg] = useState('')
    const [level, setLevel] = useState('')
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint, {name: name, img: img, level: level})
        navigate('/')

    }
  return (
    <div>
        <h2>Crear nuevo Digimon</h2>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input 
                    value={name} 
                    onChange={ (e)=> setName(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>img</label>
                <input 
                    value={img} 
                    onChange={ (e)=> setImg(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>level</label>
                <input 
                    value={level} 
                    onChange={ (e)=> setLevel(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <button type='submit' className='btn btn-success'>Guardar</button>
        </form>
    </div>
  )
}

export default CreateDigimon