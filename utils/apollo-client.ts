import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
	uri: 'https://c102-226.cloud.gwdg.de/v1/graphql',
	headers: {
		'content-type': 'application/json',
	},
	cache: new InMemoryCache(),
})

export default client