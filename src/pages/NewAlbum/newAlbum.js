import React from 'react'
import '../../../src/styles.css'
import Card from '@mui/material/Card';
import { useForm } from 'react-hook-form'

function NewAlbum(){

    const { register, handleSubmit, formState: { erros }} = useForm();

    const addPost = data => console.log(data)

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
                                </div>
                                <div className="fields">
                                    <label>Ano do Albúm:</label>
                                    <input type="number" title="year" {...register("year")}/>
                                </div>
                                <div className="btn-post">
                                    <button type="submit">Enviar</button>
                                    <a className="a" href="http://localhost:3000/">Voltar</a>
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