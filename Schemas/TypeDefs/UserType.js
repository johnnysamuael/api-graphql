const graphql = require('graphql');
const {GraphQLSchema,GraphQLObjectType,GraphQLInt, GraphQLString, GraphQLList } = graphql


const UserType = new GraphQLObjectType({ // database Table definition 
    name: "User",
    fields: ()=>({
        id: {type: GraphQLInt},
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString},
    })
})
module.exports = UserType