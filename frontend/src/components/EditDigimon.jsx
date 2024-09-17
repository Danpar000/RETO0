import axios from 'axios'
import React,{useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/digimon/'

const EditDigimon = () => {

    const [name, setName] = useState('')
    const [img, setImg] = useState('')
    const [level, setLevel] = useState('')
    const {id} = useParams()
    const navigate = useNavigate()

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${endpoint}${id}`, {
            name: name,
            img: img,
            level: level
        })
        navigate('/')
    }

    useEffect( () =>{

        const getDigimonById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setName(response.data.name)
            setImg(response)
        }
        getDigimonById()
        
    }, [])
  return (
    <div>
        <h2>Editar Digimon</h2>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'>Name</label>
                <input 
                    value={name} 
                    onChange={ (e)=> setName(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Img</label>
                <input 
                    value={img} 
                    onChange={ (e)=> setImg(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Level</label>
                <input 
                    value={level} 
                    onChange={ (e)=> setLevel(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>

            <button type='submit' className='btn btn-success'>Actualizar</button>
        </form>
    </div>
  )
}

export default EditDigimon