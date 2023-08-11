import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import ReactDOM from 'react-dom'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'

const router = createBrowserRouter([
  {
    path: '/*',
    element: <App />,
  },
])

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <RouterProvider router={router} />
  </ApolloProvider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
