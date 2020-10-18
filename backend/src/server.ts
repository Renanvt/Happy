import express from 'express'; //Importando o express
const app = express();

/*get(rota,funcao)
//request -> dados do usuario, nome, email, senha, parametros
//response -> tipo de resposta, status, error
//Rota = conjunto
//Recurso = usuario
//Métodos HTTP = GET, POST, PUT, DELETE
//Parâmetros
//GET = BUSCAR UMA INFORMAÇÃO
*/ 

//ROTA:
app.get('/users', (request, response) => {
    //return response.send('Hello World!');
    return response.json({ message: 'Hello World!' });
});

app.listen(3333); //Ouvir a porta

// REQ=CHAMADA/ RES=RESPOSTA DO NODE
/*Express Ajuda a configurar rotas na aplicação e a lidar com REQ e RES*/
//localhost:3333
