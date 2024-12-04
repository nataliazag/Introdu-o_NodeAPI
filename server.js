import fastify from "fastify";
import cors from "@fastify/cors";


const server = fastify();

server.register(cors, {
    origin:'*',
    methods: ['GET', 'POST']
})

const banco = [
    {
        email: 'padaria@gmail.com',
        senha: '123'
    }
];

server.post('/login', (request) => { 
    const usuario = request.body;
    for (const userBanco of banco) {
        if (userBanco.email === usuario.email && usuario.senha === userBanco.senha ){
            return { mensagem:'pode entrar'};
        } else {
            return {mensagem:'Credenciais invalidas'};
        }
    }
});

server.get('/login', () => {
    return 'olaa professor'
});

server.listen({
    port: 3333
});