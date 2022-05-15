import React from 'react'
import Card from '@mui/material/Card';

function NewMusic (){
    return (
        <div className='container'>
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
                        <h1>Adicionar música</h1>
                        <div className="line-post"></div>
                            <div className="card-body-post">
                            <form>
                                <div className="fields">
                                    
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