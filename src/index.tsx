import React from 'react';
import ReactDOM from 'react-dom'; //Integração do react com a árvore DOOM

import App from './App';


ReactDOM.render( //Recebe um conteúdo Jsx e coloca dentro de um elemento html
  <App />, // App -> Componente -> Funcao que retorna um conteudo HTML ou conteudo Jsx
  document.getElementById('root')
);

