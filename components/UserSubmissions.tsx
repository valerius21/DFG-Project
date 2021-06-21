import { gql, useQuery } from '@apollo/client'
import router from 'next/router'
import React, { FC } from 'react'

interface UserSubmissionsInterface {
	uid: string | string[]
}

export const USER_SUBMISSION_QUERY = gql`
query UserSubmissionCount($_eq: String!) {
  results_aggregate(where: {user: {_eq: $_eq}}) {
    aggregate {
      count
    }
  }
}
`

// Number of sumbissions made by the user
const UserSubmissions: FC<UserSubmissionsInterface> = ({ uid }) => {
	const { loading, error, data } = useQuery(USER_SUBMISSION_QUERY, { variables: { _eq: uid } })

	if (loading) return <div>Loading...</div>

	if (error) return <div>Loading error!</div>

	const { count } = data.results_aggregate.aggregate
	if (count === 300) router.push('/done')
	return (
		<>
			{count} / 300
		</>
	)
}

export default UserSubmissions
