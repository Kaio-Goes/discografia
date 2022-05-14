import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/Main/main';
import NewAlbum from './pages/NewAlbum/newAlbum';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Main}/>
                <Route path='/newAlbum' component={NewAlbum}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;