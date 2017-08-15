var express = require('express');
var graphqlHTTP = require('express-graphql');
var { graphql, buildSchema } = require('graphql');

const r29ers = {
	0: {
		id: 0,
		name: 'Ryan Catlin',
		luckyNumber: 3
	},
	4: {
		id: 4,
		name: 'Steve Tazmin',
		luckyNumber: 41
	}
};

var schema = buildSchema(`
	type R29er {
		id: Int!
		name: String!
		luckyNumber: Int!
	}

	type Query {
		hello: String
		fetchR29er(id: Int!): R29er
		R29ers: [R29er]
	}
`);


var root = {
	hello: () => {
		return 'Hello World!';
	},
	fetchR29er: ({ id }) => {
		return r29ers[id];
	},
	R29ers: () => {
		return Object.values(r29ers);
	}
};


var app = express();

app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true
}));

app.listen(8080);

console.log('We are running a GraphQL API server at localhost:8000....\n\tapparently...\n\tbut seriously though...\n\tthis isn\'t a joke...\n\tstop laughing...')