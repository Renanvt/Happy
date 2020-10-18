import express from 'express'; //Importando o express
const app = express();

/*get(rota,funcao)*/ 

app.get('/users', () => {
    console.log('teste');
});

app.listen(3333); //Ouvir a porta

// REQ=CHAMADA/ RES=RESPOSTA DO NODE
/*Express Ajuda a configurar rotas na aplicação e a lidar com REQ e RES*/
//localhost:3333
