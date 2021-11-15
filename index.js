const express = require("express");
//const { graphql, GraphQLSchema } = require("graphql");
const app = express();
const PORT = 6969;
const userData = require("./mock_data.json");
const schema = require('./Schemas/index')
const {graphqlHTTP} = require('express-graphql');
const graphql = require('graphql');
const { query } = require("express");
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
})) 
app.listen(PORT, ()=>{
    console.log("server running");
});
