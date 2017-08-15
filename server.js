var express = require('express');
var graphqlHTTP = require('express-graphql');
var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
	type Query {
		hello: String
	}
`);


var root = {
	hello: () => {
		return 'Hello World!';
	},
};


var app = express();

app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true
}));

app.listen(8080);

console.log('We are running a GraphQL API server at localhost:8000....\n\tapparently...\n\tbut seriously though...\n\tthis isn\'t a joke...\n\tstop laughing...')