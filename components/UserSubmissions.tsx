import { gql, useQuery } from '@apollo/client'
import router from 'next/router'
import React, { FC } from 'react'
import { Progress } from "antd";

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
		<div style={{ width: '50%' }}>
			<div className="text-center">Fortschritt</div>
			<Progress
				strokeColor={{
					from: '#830029',
					to: '#B92151'
				}}
				percent={Math.ceil(count / 300)}
				status="active"
			/>
		</div>
	)
}

export default UserSubmissions
