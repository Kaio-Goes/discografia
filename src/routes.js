import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Main from './pages/Main/main';
import NewAlbum from './pages/NewAlbum/newAlbum';
import NewMusic from './pages/NewMusic/newMusic';

function Rotas(){
    return(
        <Router>
            <Routes>
                <Route path='/' exact element={<Main />}/>                    
                <Route path='/newAlbum' exact element={<NewAlbum />}/>
                <Route path='/newMusic' exact element={<NewMusic />}/>
            </Routes>
        </Router>
    )
}

export default Rotas;