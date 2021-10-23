const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('pages/index');
  const items = [
    {
      title: 'D',
      message: 'Desenvolver aplicações/serviços de forma fácil',
    },
    {
      title: "E",
      menssagem: "EJS usa JavaScript para renderizar HTML"
    }
    {
      title: "M",
      menssagem: "Muito fácil de usar"
    }   
    {
      title: "A",
      menssagem: "Amorzinho"
    }     
    {
      title: "I",
      menssagem: "install ejs"
    }     
    {
      title: "S",
      menssagem: "Sintaxe simples"
    }  
  ];
  res.render('pages/index') {
    quality
  }
});

app.get('/sobre', function (req, res) {
  res.render('pages/about');
});

app.listen(8080);
console.log('Servidor funcionando');
