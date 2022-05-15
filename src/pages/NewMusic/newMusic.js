import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import Select from 'react-select';
import api from '../../Services/api'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"

const validationPost = yup.object().shape({
    album_id:  yup.number()
            .typeError('É obrigatório o identificador do Albúm')
            .min(1, 'Mínimo é 1'),
    number:  yup.number()
            .typeError('É obrigatório o número da faixa')
            .min(1, 'Mínimo é 1'),
    title: yup.string().required("O nome da faixa é obrigatório")
            .min(1, 'O mínimo do nome do Albúm é de 1 caractere')
            .max(30, 'O Albúm precisa ter menos de 30 caracteres'),
    duration:  yup.number()
            .typeError('É obrigatório a duração da faixa em seg')
            .min(0, 'Ano mínimo é 1900')
    })

function NewMusic (){
    const [report, setReport] =  useState({})
    const array = Array.from(report)
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(validationPost)
    });

    let navigate = useNavigate()
    function handleClick(){
        navigate('/')
    }

    useEffect(()=>{
        async function componentDidMount() {
            try {
                const response = await api.get('album')
                const data = response.data.data
                console.log(data)
                setReport(data)
            }catch(error){
                alert(error.message);
            }
        }
        componentDidMount()
    }, [])

    const addPost = data => api.post('track', data)
    .then(() => {
        console.log("Deu certo")
        navigate('/')
    }).catch(() => {
        console.log('Deu errado')
    })

    return (
        <div className='container'>
            <Card sx={{width:650 , height: 100, marginTop: -10}}>
            <br/>
                <img className='image' src={require('../../img/logo.png')}/>
                <p className='discografia'>Discografia</p>
            </Card>
            <br/>
            <Card  sx={{width:650 , backgroundColor:  'rgba(255,255,255,0.7)'}}>
                <main>
                    <div className="card-post">
                        <h1>Adicionar música</h1>
                        <div className="line-post"></div>
                            <div className="card-body-post">
                                <form onSubmit={handleSubmit(addPost)}>
                                        <div>
                                            <div className="fields">
                                                <label>Chave do Albúm:</label>
                                                {/* <select className="select" value="album_id"{...register(`album_id}`)}>
                                                {array.map((player, index) =>(
                                                    <option value={index} key={index}>{player.name}</option>
                                                ))}
                                                </select> */}
                                                <input  type="number" title="album_id" {...register("album_id")}/>
                                                <p className="error-message">{errors.album_id?.message}</p>
                                            </div>
                                        </div>
                                        <div className="fields">
                                            <label>Número da faixa:</label>
                                            <input type="number" title="number" {...register("number")}/>
                                            <p className="error-message">{errors.number?.message}</p>
                                        </div>
                                        <div className="fields">
                                            <label>Nome da música</label>
                                            <input type="text" title="title" {...register("title")} />
                                            <p className="error-message">{errors.title?.message}</p>
                                        </div>
                                        <div className="fields">
                                            <label>Tempo de duração em segundos</label>
                                            <input type="number" title="duration" {...register("duration")}/>
                                            <p className="error-message">{errors.duration?.message}</p>
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

export default NewMusic;