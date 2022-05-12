import axios from 'axios'

const api = axios.create({
    baseURL: 'https://tiao.supliu.com.br/api/',
    headers:{
            'Authorization': 'kaiogoes1999@gmail.com',
            'Content-type': 'application/json' 
        } 
    }
    )

export default api;