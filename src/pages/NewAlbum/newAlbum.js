import React from 'react'
import '../../../src/styles.css'
import Card from '@mui/material/Card';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import api from '../../Services/api'
import { useNavigate } from 'react-router-dom';

const validationPost = yup.object().shape({
    name: yup.string().required("O nome do Albúm é obrigatório")
            .min(1, 'O mínimo do nome do Albúm é de 1 caractere')
            .max(30, 'O Albúm precisa ter menos de 30 caracteres'),
    year:  yup.number()
            .typeError('O ano do Albúm é obrigatório')
            .min(1900, 'Ano mínimo é 1900')
            .max(2022, 'Ano máximo é 2022'),
})

function NewAlbum(){

    let navigate = useNavigate()
    function handleClick(){
        navigate('/')
    }

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(validationPost)
    });

    const addPost = data => api.post('album', data)
    .then(() => {
        console.log("Deu certo")
        navigate('/')
    }).catch(() => {
        console.log('Deu errado')
    })
     

    return(
        <div className="container">
            <Card sx={{width:650 , height: 100, marginTop: -10}}>
                <br/>
                <img className='image' src={require('../../img/logo.png')}/>
                <p className='discografia'>Discografia</p>
            </Card>
            <br/>
            <Card  sx={{width:650 , backgroundColor:  'rgba(255,255,255,0.7)'}}>
                <br/>
                <main>
                    <div className="card-post">
                        <h1>Criar novo Albúm</h1>
                        <div className="line-post"></div>
                        <div className="card-body-post">
                            <form onSubmit={handleSubmit(addPost)}>
                                <div className="fields">
                                    <label>Nome do Albúm:</label>
                                    <input type="text" title="name" {...register("name")}/>
                                    <p className="error-message">{errors.name?.message}</p>
                                </div>
                                <div className="fields">
                                    <label>Ano do Albúm:</label>
                                    <input type="number" title="year" {...register("year")}/>
                                    <p className="error-message">{errors.year?.message}</p>
                                </div>
                                <div className="btn-post">
                                    <button type="submit">Enviar</button>
                                    <button style={{marginLeft: 10}} onClick={handleClick}>Voltar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
              
            </Card>
        </div>
    )
}

export default NewAlbum;