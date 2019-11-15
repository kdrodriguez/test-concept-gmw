import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from 'react-apollo'
//import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import 'bootstrap/dist/css/bootstrap.css';


const httpLink = createHttpLink({
  //uri: 'http://localhost:4000/mendeley-graphql',
  uri: 'https://graphql-mendeley.herokuapp.com/mendeley-graphql',
  //uri: 'http://localhost:3001/pizza_api'
  credentials: 'include',
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  
  //fetchOptions: {
  //  mode: 'no-cors',
  //},
  
})

ReactDOM.render(
  <ApolloProvider client={client}>
      <App/>
  </ApolloProvider>,
  document.getElementById('root')
)
serviceWorker.unregister();

/*
<ApolloProvider client={client}>
<ApolloHooksProvider client={client}>
  <App/>
</ApolloHooksProvider>
</ApolloProvider>,
document.getElementById('root')
*/


