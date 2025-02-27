const express = require('express');
const ejs = require('ejs');
const path = require('path');
const views = path.join(__dirname , 'views');
console.log(__dirname);
const app = express();
const port = 3000;
app.set('views', views);
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);
app.use(express.static(path.join(__dirname , 'public')))

console.log(path.join(__dirname , 'public'));

//1 view -----------------------------------------------------------------------------
app.get('/', (req, res)=>{
    let dados = {
        t: 'exemplo de view',
        msg: 'teste123'
    };
    res.render(path.join(views, 'index.html'), {dados}, (err, html) =>{
        if (err){
            console.error('Erro ao renderizar a view:', err);
        }
        res.send(html);
    })})
    // 2 view -----------------------------------------------------------------------------
/*app.get('/site', (req, res)=>{
    let dados = {
        t: 'exemplo de view',
        msg: 'teste123'
    };
    res.render(path.join(views, 'index.html'), {dados}, (err, html) =>{
        if (err){
            console.error('Erro ao renderizar a view:', err);
        }
        console.log('**********VIEW*********:'+html);
        res.send(html);
    })});*/
    //3 view -----------------------------------------------------------------------------
app.get('/login/', (req, res)=>{
    let dados = {
        t: 'exemplo de view',
        msg: 'teste123'
    };
    res.render(path.join(views, 'login.html'), {dados}, (err, html) =>{
        if (err){
            console.error('Erro ao renderizar a view:', err);
        }
        res.send(html);
    })});
    //4 view -----------------------------------------------------------------------------
app.get('/sobre/', (req, res)=>{
    let dados = {
        t: 'exemplo de view',
        msg: 'teste123'
    };
    res.render(path.join(views, 'sobre.html'), {dados}, (err, html) =>{
        if (err){
            console.error('Erro ao renderizar a view:', err);
        }
        res.send(html);
    })});   
    //5 view -----------------------------------------------------------------------------
app.get('/Contato/', (req, res)=>{
    let dados = {
        t: 'exemplo de view',
        msg: 'teste123'
    };
    res.render(path.join(views, 'ctt.html'), {dados}, (err, html) =>{
        if (err){
            console.error('Erro ao renderizar a view:', err);
        }
        res.send(html);
    })}); 

app.listen(port,()=>{
    console.log('Servidor inicializado com sucesso na porta ' + port);
});

