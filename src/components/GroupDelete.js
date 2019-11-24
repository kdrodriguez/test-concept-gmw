import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { GROUP_DELETE } from '../graphql-tags/graphql-tagsMutation';


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
        <div> ¿Desea realmente eliminar el grupo <strong>{name}</strong>? </div>
        <div className="flex flex-column mt3">
                
        </div>
        <hr/>
        <Mutation mutation={GROUP_DELETE} variables={{ id }}>
          {groMutation => <button className="btn btn-danger float-right" onClick={groMutation}><i className="fas fa-times"></i> Eliminar </button>}
        </Mutation>
      </div>
    )
  }
}

export default GroupDelete