import React, { useState } from 'react';

import './global.css'

import Routes from './routes'

// Anotações do curso:
  //* useState é usado para converter a variável em um "estado", a ser atualizado junto com a página 
  //* State é retornado como um array: [valor, funcaoDeAtualização]
  //* Por questões de performance, nunca devemos alterar o valor de uma variável de estado diretamente. Precisamos
  //  sobrepor a variável

function App() {
  return (
    <Routes />
  );
}

export default App;
