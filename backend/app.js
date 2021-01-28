// Express é uma cadeia de middlewares
const express = require('express');

const app = express();

//Definindo a API que será acionada com o POST
app.use('/api/posts', (req, res, next) => {
  const post = [
    //Dados mockados
    {
      id: '74633deW',
      title: 'Primeira Mensagem do Servidor',
      content: 'Isso vem do servidor'
    },
    {
      id: '74632deW',
      title: 'Segunda Mensagem do Servidor',
      content: 'Isso vem do servidor'
    }
  ];
  // 200 -> resultado com sucesso
    res.status(200).json({
      message: 'Postagens obtidas com sucesso!',
      posts: posts
    });
});

module.exports = app;
