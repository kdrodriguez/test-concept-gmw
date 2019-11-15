import React from 'react';
import {ReflexContainer, ReflexElement} from 'react-reflex'
import Main from './Main'

class Reflex extends React.Component {
  render() {
    return (
      <ReflexContainer orientation="horizontal" maxSize={100}> 
        <ReflexElement>
          <Main/> 
        </ReflexElement>
      </ReflexContainer>
      )
 }
}

export default Reflex;