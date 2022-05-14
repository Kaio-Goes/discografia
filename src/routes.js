import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Main from './pages/Main/main';
import NewAlbum from './pages/NewAlbum/newAlbum';

function Routes(){
    return(
        <Router>
            <Switch>
                <Route path='/' exact>
                    <Main />
                </Route>
                <Route path='/newAlbum' exact>
                    <NewAlbum />
                </Route> 
            </Switch>
        </Router>
    )
}

export default Routes;