import { gql, useQuery } from '@apollo/client'
import { VFC } from 'react'
import './App.css'
import MyAdmin from './admin'

const GET_LOCATIONS = gql`
  query users {
    users {
      id
      age
      firstName
      movies {
        id
        title
        year
      }
    }
  }
`

// const App: VFC = () => <MyAdmin />
const App: VFC = () => {
  // eslint-disable-next-line
  const { loading, error, data } = useQuery(GET_LOCATIONS)
  if (loading) return null
  if (error) return <p>Error : {error.message}</p>
  console.log(data)
  return <MyAdmin />
}

export default App
