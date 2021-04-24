const express = require("express");
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json())


const customers = [];

// Middleware
function verifyIfExistsAccountCPF(request, response, next) {
    const { cpf } = request.headers;
    // const { cpf } = request.params;
    const customer customers.find(customer => customer.cpf === cpf);

    if(!customer) {
        return response.status(400).json({ error: "Customer not found."});
    }

    request.customer = customer;

    return next();
}

app.post("/account", (request, response) => {
    const {cpf, name} = request.body;

    const customerAlreadExists = customer.some((customer) => customer.cpf === cpf);

    if(customerAlreadExists) {
        return response.status(400).json({  error: 'Customer alread exists!'});
    }

    customers.push({
        cpf,
        name,
        id: uuidv4(),
        statement: []
    });

    return response.send(201).send();
});

// app.use(verifyIfExistsAccountCPF);

app.get('/statement/:cpf', verifyIfExistsAccountCPF, (request, response) => {
    const { customer } = request;
    return response.json(customer.)
});

app.listen(3333);