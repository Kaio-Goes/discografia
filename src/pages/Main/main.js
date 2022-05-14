import * as React from 'react';
import { useState, useEffect } from 'react'
import '../../../src/styles.css'
import Card from '@mui/material/Card';
import {useHistory} from 'react-router-dom';
  
import {FiSearch} from 'react-icons/fi'
import api from '../../Services/api'
import { keyframes } from '@emotion/react';
import { Table, Container, Row, Col,Button,Image   } from 'react-bootstrap';

function Main() {
  const [report, setReport] =  useState({})
  const [search, setSearch] = useState('')
  const array = Array.from(report)

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

  const converter = (minutos) => {
    const horas = Math.floor(minutos/60);
    const min = minutos % 60;
    const textoHoras = (`0${horas}`).slice(-1);
    const textoMinutos = (`00${min}`).slice(-2);

    return `${textoHoras}:${textoMinutos}`;
  }

  const history = useHistory();
  
  const addPost = data => api.post('album', {
    name: data.name,
    year: data.year
  }).then(() => {
    console.log("Deu certo")
  }).catch(() => {
    console.log('Deu errado')
  })


  return (
    <div className="container">
      <Card sx={{width:650 , height: 100, marginTop: -10}}>
          <br/>
        <img className='image' src={require('../../img/logo.png')}/>
          <p className='discografia'>Discografia</p>
      </Card>
      <br/>
      <Card sx={{width:650 , backgroundColor:  'rgba(255,255,255,0.7)'}}>
        {/* <button onClick={() => history.push('/newAlbum')} className="button">+Criar Novo Albúm</button> */}
        <br/>
        <a className="a" href="http://localhost:3000/newAlbum">+Criar Albúm</a>
        <p style={{color: 'gray', paddingTop: 20, paddingLeft: 20, paddingBottom: 10}}>Digite uma palavra chave</p>
          <input className="input" type="text" placeholder="Pesquise a música" onChange={event => setSearch(event.target.value)}/>
            {array.map((player, index) => (
               <div key={index}>
                <table>
                  <thead>
                    <tr>
                      <th><div style={{marginLeft: 20, paddingBottom: 10}}>Albúm: {player.name},{player.year}</div></th>
                    </tr>
                  </thead>
                </table>
              <table >
                <thead>
                  <tr>
                    <th style={{ paddingLeft: 20, color: 'gray', paddingBottom: 10}}>Nº</th>
                    <th style={{color: 'gray'}}>Faixa</th>
                    <th  align="right"><div style={{marginLeft: 300,color: 'gray'}}>Duração</div></th>
                  </tr>
                </thead>
                <tbody>
                    {player.tracks.filter((val)=> {
                      if(search == ""){
                        return val
                      } else if (val.title.toLowerCase().includes(search.toLowerCase())){
                        return val
                      }
                    }).map((p,i) => (
                    <tr key={i}>
                      <td style={{ paddingLeft: 20, paddingBottom: 10}} >{p.number}</td>
                      <td align="left"><div align="left" style={{marginLeft: 60}}>{p.title}</div></td>
                      <td align="right"><div style={{marginRight: 30}}>{converter(p.duration)}</div></td>
                    </tr>
                    ))}
                </tbody>
              </table>
              </div>
            ))}

      </Card>
    </div>
  );
}

export default Main;