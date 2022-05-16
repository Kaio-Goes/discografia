import * as React from 'react';
import { useState, useEffect } from 'react'
import '../../../src/styles.css'
import Card from '@mui/material/Card';
import api from '../../Services/api'
import {BsFillTrashFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

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

  function deletePost(id) {
    if(window.confirm("Você quer realmente excluir o Albúm?")){      
      api.delete(`album/${id}`).then(() => {
        alert("Deletado com sucesso")})
        setReport(report.filter(player => player.id !== id))
      }else {
      return false
    }
  }

    function deletePostMusic(id){
      if(window.confirm("Você quer realmente excluir o Albúm?")){
        api.delete(`track/${id}`).then(() => {
          alert("Deletado com sucesso")})
          window.location.reload(setReport(report.filter(player => (player.id !== id)))) 
      }else{
        return false
      }
    }


  let navigate = useNavigate()
  function handleClickNewAlbum(){
      navigate('/newAlbum')
  }

  function handleClickNewMusic(){
    navigate('/newMusic')
}

  const converter = (minutos) => {
    const horas = Math.floor(minutos/60);
    const min = minutos % 60;
    const textoHoras = (`0${horas}`).slice(-1);
    const textoMinutos = (`00${min}`).slice(-2);

    return `${textoHoras}:${textoMinutos}`;
  }

  return (
    <div className="container">
      <Card sx={{width:650 , height: 100, marginTop: -10}}>
          <br/>
        <img className='image' src={require('../../img/logo.png')}/>
          <p className='discografia'>Discografia</p>
      </Card>
      <br/>
      <Card sx={{width:650 , backgroundColor:  'rgba(255,255,255,0.7)'}}>
        <button className="btn-newAlbum" 
          onClick={handleClickNewAlbum}>
            +Criar Novo Albúm
        </button>
        <button className="btn-newAlbum"
          onClick={handleClickNewMusic}>
            +Adicionar música ao Albúm
        </button>
        <br/>
        <p style={{color: 'gray', paddingTop: 20, paddingLeft: 20, paddingBottom: 10}}>Digite uma palavra chave</p>
          <input className="input" type="text" placeholder="Pesquise a música" onChange={event => setSearch(event.target.value)}/>
            {array.map((player, index) => (
              <div key={index}>
                <table>
                  <thead>
                    <tr style={{padding: 200}}>
                        <th>
                          <div style={{marginLeft: 20, paddingBottom: 5}}>
                            Albúm: {player.name},{player.year}
                          </div>
                        </th>
                        <th>
                            <div className="div-btn">
                            <button  onClick={() => deletePost(player.id)} className="btn-excluir">
                              Excluir Albúm <BsFillTrashFill />
                            </button>
                            </div>
                        </th>
                    </tr>
                  </thead>
                </table>
              <table >
                <thead>
                  <tr>
                    <th style={{ paddingLeft: 20, color: 'gray', paddingBottom: 10}}>
                      <div style={{marginTop: 10}}>Nº</div>
                    </th>
                    <th style={{color: 'gray'}}>
                      <div>Faixa</div>
                    </th>
                    <th  align="right"><div style={{marginLeft: 250,color: 'gray'}}>Duração</div></th>
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
                      <td>
                        <button onClick={() => deletePostMusic(p.id)} className="btn-excluirMusic">
                          Excluir <BsFillTrashFill />
                        </button>
                      </td>
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