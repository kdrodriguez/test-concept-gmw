import React from 'react';
import {ReflexContainer, ReflexElement} from 'react-reflex'
import Main from './Main'

class Reflex extends React.Component {
  render() {
    return (
      <ReflexContainer className="min-vh-100" orientation="horizontal" maxSize={100}> 
        <ReflexElement className="h-100 mh-100">
          <Main/> 
        </ReflexElement>
      </ReflexContainer>
      )
 }
}

export default Reflex;