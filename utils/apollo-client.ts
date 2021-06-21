import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
	uri: 'https://brave-osprey-12.hasura.app/v1/graphql',
	headers: {
		'content-type': 'application/json',
	},
	cache: new InMemoryCache(),
})

export default client