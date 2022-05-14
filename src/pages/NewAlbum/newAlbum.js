import React from 'react'
import '../../../src/styles.css'
import Card from '@mui/material/Card';

function newAlbum(){
    return(
        <div className="container">
            <Card sx={{width:650 , height: 100, marginTop: -10}}>
                <br/>
                <img className='image' src={require('../../img/logo.png')}/>
                <p className='discografia'>Discografia</p>
            </Card>
            <br/>
            <Card  sx={{width:650 , backgroundColor:  'rgba(255,255,255,0.6)'}}>
                <br/>
                <a className="a" href="http://localhost:3000/">Voltar</a>
            </Card>
        </div>
    )
}

export default newAlbum;