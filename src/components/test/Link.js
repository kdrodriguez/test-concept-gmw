import React, { Component } from 'react'
//import Document from './Document'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
//import { ListGroup, ListGroupItem, Badge, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { Badge } from 'reactstrap';

const DOCS_QUERY = gql`
{
  pizzas{
  	id
    name
    ingredients{
      name
    }
  }
}
`;

class Pizza extends Component {

  render() {
  // <Query query={DOCS_QUERY} pollInterval={2000}> // la consulta se actualiza cada 2 seg
    return (
      <Query query={DOCS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return "Cargando..."
          if (error) return `Error! ${error}`
    
          const pizzas = data.pizzas;

          console.log(pizzas)

    
          return (
        
        <div>
         <div className="list-group">
          {pizzas.map(pizza => (
          <a key={pizza.id} href="/" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h6 className="mb-1 font-weight-light small font-weight-bold">{pizza.name}</h6>
              <small>{(pizza.name).substr(0,10)}</small>
            </div>
            	{pizza.ingredients.map(ingredient => (
            			<p className="mb-0 small"> <Badge pill color="primary">pizza.name</Badge> ({ingredient.name})</p>  
            		))}
                                
              
          </a>
          ))}
        </div>
        </div>
      );
        }}
      </Query>
    )
  }
}

export default Pizza;
