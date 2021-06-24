import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
	uri: 'http://c102-226.cloud.gwdg.de:8080/v1/graphql',
	headers: {
		'content-type': 'application/json',
	},
	cache: new InMemoryCache(),
})

export default client