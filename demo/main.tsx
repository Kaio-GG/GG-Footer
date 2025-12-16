import React from 'react';
import ReactDOM from 'react-dom/client';
import { GGFooter } from '../src/Footer';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GGFooter 
      nome="Seu nome"
      gmail="exemplo@gmail.com"
      whatsapp="https://wa.me/559999999"
      github="https://github.com/seuusuario"
      linkedin="https://linkedin.com/in/exemplo"
    />
  </React.StrictMode>
);
