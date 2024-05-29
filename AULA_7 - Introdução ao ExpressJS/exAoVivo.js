const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

let frase = "Servidor com express CoderHouse";

app.get('/api/frase', (req,res)=>{
    res.json({frase});
});

app.get('/api/palavras/:pos', (req, res)=>{
    const pos = parseInt(req.params.pos);
    const palavras = frase.split(' ');

    if(pos > 0 && pos < palavras.length){
        res.json({busca: palavras[pos -1]});
    }else{
        res.status(400).json({status:"Error", message:"Posição não existe"});
    }
    
});

app.post('/api/palavras', (req, res)=>{
    const novaPalavra = req.body.palavra;

    if(novaPalavra){
        frase += ` ${novaPalavra}`;
        const palavras = frase.split(' ');
        res.json({adicionado: novaPalavra, pos: palavras.length});
    }else{
        res.status(400).send({status:"Error", message:"Palavra não encontrada" });
    }
});


app.put('/api/palavras/:pos', (req, res)=>{
    const pos = parseInt(req.params.pos);
    const novaPalavra = req.body.palavra
    const palavras = frase.split(' ');

    if(pos > 0 && pos < palavras.length && novaPalavra){
        const palavraAnterior = palavras[pos - 1];
        palavras[pos - 1] = novaPalavra;
        frase = palavras.join(' ');
        res.json({atualizado: novaPalavra, anterior: palavraAnterior});
    }
});

app.delete('/api/palavras/:pos', (req, res)=>{
    const pos = parseInt(req.params.pos);
    const palavras = frase.split(' ');

    if(pos > 0 && pos < palavras.length){
        const palavraRemovida = palavras.splice(pos - 1, 1);
        frase = palavras.join(' ');
        res.json({removido: palavraRemovida[0]});
    }else{
        res.status(404).json({error:"Posição inválida"});
    }
});

app.listen(8080, ()=>{console.log("Ouvindo na porta 8080")});