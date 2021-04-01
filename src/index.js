// O index.js é o primeiro que roda
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Especifica-se os módulos desejados pois não estão exportados default
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/index';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria'


// Esse método  renderiza o React dentro do nosso 'root', ou seja, no DOM
ReactDOM.render(
  // Aqui, a lib BrowserRouter vai dar um wrap em todas as possíveis
  // páginas e criar possíveis rotas (roteamento)
  <BrowserRouter>
  {/* Verifica a lógica do Router */}
    <Switch>
      {/* A ORDEM IMPORTA!!! Se inverter, /cadastro/video retorna Home, porque começa com "/" */}
      {/* Quando o path for /, o componente retornado é o Home */}
      <Route path="/" exact component={Home} />
      {/* Quando o path for cadastro/video, retorna o componente da página de cad. de vídeo */}
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      {/* É possível criar o componente direto da rota, sobretudo usando arrow function */}
      <Route component={() => (<div>Página 404</div>)}  />
    </Switch>
  </BrowserRouter>, 
  // <React.StrictMode>
  //   <Home />
  // </React.StrictMode>,
  document.getElementById('root')
);

