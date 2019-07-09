const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

// mongoose.Promise = global.Promise;
mongoose.connect('mongodb://10.132.95.94/graphql-db', { useNewUrlParser: true });


mongoose.connection.once('open',()=>{
    console.log('Connected to Database on ansible.dev');
});

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000,()=>{
    console.log('Listening on http://localhost:4000');
});