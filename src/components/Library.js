import React from 'react'
import Folders from './Folders'
import Groups from './Groups'
import { Container, Row, Col } from 'reactstrap';

import {
  ReflexContainer,
  ReflexSplitter,
  ReflexElement,
  ReflexHandle
} from 'react-reflex'

import 'react-reflex/styles.css'
import 'react-reflex/dist/umd/react-reflex.js'



class Library
  extends React.Component {

  render () {
    return (
      <ReflexContainer orientation="horizontal" windowResizeAware  maxSize={100}>

        <ReflexElement minSize={36}>
          <div className="handle">
            <Container className="text-white bg-secondary">
              <Row>
                <Col className="mb-1 mt-1"><h6><i className="fas fa-folder"></i> CARPETAS</h6></Col>
              </Row>
            </Container>
          </div>
          
        <Folders/>
 
        </ReflexElement>

        <ReflexSplitter/>
        <ReflexElement minSize={36}>
          <ReflexHandle className="handle">
            <Container className="text-white bg-secondary">
              <Row>
                <Col className="mb-1 mt-1"><h6><i className="fas fa-users"></i> GRUPOS</h6></Col>
              </Row>
            </Container>
          </ReflexHandle>

              <Groups/>

        </ReflexElement>
      </ReflexContainer>
    )
  }
}


export default Library;