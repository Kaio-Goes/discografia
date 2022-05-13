import * as React from 'react';
import { useState, useEffect } from 'react'
import './styles.css'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import {FiSearch} from 'react-icons/fi'
import api from '../src/Services/api'
import { keyframes } from '@emotion/react';
import { Container, Row, Col,Button,Image   } from 'react-bootstrap';

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
        <table>
          <thead>
            {kaio.map((player,index) => (
              <tr key={index}>
                <th>Albúm:</th>
                <th style={{paddingLeft: 2}}>{player.name},</th>
                <th style={{paddingRight: 400}}>{player.year}</th>
              </tr>
            ))}
          </thead>
          <br/>
          <tbody>
            <tr>
              <td style={{color: 'gray'}}>Nº</td>
              <td style={{color: 'gray'}}>Faixa</td>
              <td style={{paddingLeft: 350, color: 'gray'}}>Duração</td>
            </tr>
            {kaio.map((player, index) => (
              <tr key={index}>
                  {player.tracks.map((p, i) => (
                    <td>{p.number}</td>
                  ))}
                </tr>
            ))}
            </tbody>
        </table>

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