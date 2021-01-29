// Express é uma cadeia de middlewares
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();

mongoose.connect("mongodb+srv://IsabelaMedeiros:Ooo888@cluster0.yqusn.mongodb.net/node-angular?retryWrites=true&w=majority")
  .then(() => {
    console.log('Conectado ao MongoDB');
    })
    .catch(() => {
      console.log('Falha na conexão com o Mongo')
    });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
  "GET, POST, PATCH, DELETE, OPTIONS"
);
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save();
  res.status(201).json({
    message:'Post Adicionado com Sucesso!'
  });
});


//Definindo a API que será acionada com o POST
app.get("/api/posts", (req, res, next) => {
  const posts = [
    //Dados mockados
    {
      id: '74633deW',
      title: 'Is is possible to ssh into the blockchain nodes on the IBM blockchain platform?',
      content: 'I would like to be able to ssh into to orderer and peers to make changes and examine the ledger. Is this possible on IBM blockchain V1.0?'
    },
    {
      id: '74632deW',
      title: 'Why blockchain and food trust?',
      content: 'How does adding blockchain change the food industry?'
    },
    {
      id: '74632deW',
      title: 'What data is actually recorded on the Blockchain?',
      content: 'What data is actually recorded on the Blockchain? The information that is uploaded into the blockchain are XMLs, this is then converted in a readable format '
    },
    {
      id: '74632deW',
      title: 'How does IBM blockchain solves the problem of double spending and denial of service?',
      content: 'I have completed IBM Blockchain Essentials, and I was wondering still in transactions ownership of some property can be transfered. There is no cryptocurrency involved but the value can transfer though blockchain. How it is prevented as we have this...'
    },

  ];
  // 200 -> resultado com sucesso
    res.status(200).json({
      message: 'Postagens obtidas com sucesso!',
      posts: posts
    });
});

module.exports = app;
