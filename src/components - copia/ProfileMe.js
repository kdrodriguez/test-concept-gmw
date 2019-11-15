import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import SpinnerData from './Spinner';

const PROFILE_ME_QUERY = gql`
{
  profileMe{
    created
    academic_status
    email
    link
    display_name
  }
}
`;

class ProfileMe extends Component {

  render() {
  // <Query query={DOCS_QUERY} pollInterval={2000}> // la consulta se actualiza cada 2 seg
    return (
      <Query query={PROFILE_ME_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <SpinnerData/>
          if (error) return `${error}` 

           return (
      <div className="card card-cascade wider">
        <div className="view view-cascade overlay mx-auto mt-3">
          <i className="fas fa-user-tie fa-8x"></i>
          <a href="#!">
            <div className="mask rgba-white-slight"></div>
          </a>
        </div>
        <div className="card-body card-body-cascade text-center">
          <h2 className="card-title"><strong>{data.profileMe.display_name}</strong></h2>
          <h6 className="text-secondary pb-2"><strong>{data.profileMe.academic_status}</strong></h6>
          <h6 className="text-muted pb-2"><strong>{data.profileMe.email}</strong></h6>
          
          Ver perfil en Mendeley ➜ <a href={data.profileMe.link} className="px-2 fa-lg li-ic" target="blank">
            <span className="fa-stack">
              <i className="fas fa-square fa-stack-2x"></i>
              <i className="fab fa-mendeley fa-stack-1x fa-inverse btn-danger"></i>
            </span>
          </a>
        </div>
      </div>
    );
        }}
      </Query>
    )
  }
}

export default ProfileMe