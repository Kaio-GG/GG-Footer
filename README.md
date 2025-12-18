# **GG-footer**

Um componente de rodapé simples, elegante e fácil de usar.  
Inclui ícones para WhatsApp, Gmail e LinkedIn, totalmente estilizados e responsivos. Ideal para qualquer projeto React.

## Instalação

npm install gg-footer
 
## Uso

import GGFooter from "gg-footer";

function App() {
  return (
    <div>
      <GGFooter
        whatsapp="5511999999999"
        gmail="seuemail@gmail.com"
        linkedin="https://www.linkedin.com/in/seuusuario/"
        owner="Seu Nome Aqui"
      />
    </div>
  );
}

export default App;

## Props

| Prop       | Tipo   | Descrição |
|------------|--------|-----------|
| nome       | string | Nome exibido no rodapé |
| whatsapp   | string | Link do WhatsApp |
| github     | string | Link do GitHub |
| gmail      | string | Email (mailto) |
| linkedin   | string | Perfil LinkedIn |


## Demo

![alt text](hover.gif)

![alt text](<Captura de Tela 2025-12-18 às 11.31.25.png>)

![alt text](<Captura de Tela 2025-12-18 às 11.31.33.png>)

![alt text](<Captura de Tela 2025-12-18 às 11.37.47.png>)

![alt text](<Captura de Tela 2025-12-18 às 11.37.52.png>)

![alt text](<Captura de Tela 2025-12-18 às 11.37.56.png>)