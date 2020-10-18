import React from 'react';//Toda vez que vou colocar um componente em tela, precisa importa o react
import{ BrowserRouter, Switch, Route } from 'react-router-dom';
//Switch -> Sempre uma unica rota seja exibida em tela
import landing from './pages/landing';
import OrphanagesMap from './pages/OrphanagesMap';

function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={landing} />  
            <Route path="/app" component={OrphanagesMap} />
        </Switch>
        </BrowserRouter>
        //path-> caminho da rota
         //component -> componente que quero exibir em tela quando a rota for acessada
    );
}

export default Routes;