import { ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
	uri: 'https://brave-osprey-12.hasura.app/v1/graphql',
	headers: {
		'content-type': 'application/json',
		'x-hasura-admin-secret': '4reLXSnkhSfHKifO6c64mn0k1TMVGXs7KaQDVkpKQyuYcn9A5xtp1lIhCzEQrWgG'
	},
	cache: new InMemoryCache()
})

export default client