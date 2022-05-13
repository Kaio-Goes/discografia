import * as React from 'react';
import { useState, useEffect } from 'react'
import './styles.css'
import Card from '@mui/material/Card';

import {FiSearch} from 'react-icons/fi'
import api from '../src/Services/api'
import { keyframes } from '@emotion/react';
import { Table, Container, Row, Col,Button,Image   } from 'react-bootstrap';

function App() {
  const [report, setReport] =  useState({})

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
  
  // const addPost = data => api.post('album', {
  //   name: data.name,
  //   year: data.year
  // }).then(() => {
  //   console.log("Deu certo")
  // }).catch(() => {
  //   console.log('Deu errado')
  // })

  const kaio = Array.from(report)
  

  return (
    <div className="container">
      <Card sx={{width:650 , height: 100, marginTop: -40}}>
          <br/>
        <img className='image' src={require('../src/img/logo.png')}/>
          <p className='discografia'>Discografia</p>
      </Card>
      <br/>
      <Card sx={{width:650 , backgroundColor:  'rgba(255,255,255,0.6)'}}>
            {kaio.map((player, index) => (
               <div key={index}>
                <table>
                <thead>
                  <tr>
                    <th><div style={{marginLeft: 20}}>Albúm: {player.name},{player.year}</div></th>
                  </tr>
                </thead>
                </table>
              <table >
                <thead>
                  <tr>
                    <th style={{ color: 'gray'}}>Nº</th>
                    <th style={{color: 'gray'}}>Faixa</th>
                    <th  align="right"><div style={{marginLeft: 300,color: 'gray'}}>Duração</div></th>
                  </tr>
                </thead>
                <tbody>
                    {player.tracks.map((p,i) => (
                    <tr key={i}>
                      <td >{p.number}</td>
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
    // <div>
    //         <table style={{ textAlign: 'center', border: '1px solid #000' }}>
    //             <thead>
    //                 <tr>
    //                     <th colSpan="2">Warrions</th>
    //                     <th colSpan="2">Total</th>
    //                 </tr>

    //                 <tr>

    //                     <td>Ataques</td>
    //                     <td>Defesas</td>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {kaio.map((player, index) => (
    //                     <tr key={index}>
    //                         <td>{index + 1}</td>
    //                         <td>{player.name}</td>
    //                         <td>{player.year}</td>
    //                         {player.tracks.map((p, i) =>
    //                                 <td>{p.title}</td> (
    //                         ))}
    //                     </tr>
    //                 ))}
    //             </tbody>
    //         </table>
    // </div>
  );
}

export default App;