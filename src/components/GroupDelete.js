import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
//import { Button } from 'reactstrap';

const GROUP_DELETE = gql`
mutation deleteGroup($id: String!){
  deleteGroup(id: $id){
    statusText
  }
}
`
class GroupDelete extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.data.id,
      name: this.props.data.name,
   }
  }

  render() {
    const { id, name } = this.state
    return (
      <div>
        <form>
        <div> ¿Desea realmente eliminar el grupo <strong>{name}</strong>? </div>
        <div className="flex flex-column mt3">
                
        </div>
        <hr/>
        <Mutation mutation={GROUP_DELETE} variables={{ id }}>
          {groMutation => <button className="btn btn-danger float-right" onClick={groMutation}><i className="fas fa-times"></i> Eliminar </button>}
        </Mutation>
        </form>
      </div>
    )
  }
}

export default GroupDelete