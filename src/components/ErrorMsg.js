import React, { Component } from 'react'

class ErrorMsg extends Component {

	constructor(props){
   		super(props);
    	this.state = {
      		errorMsg: this.props.errorMsg,
   		}
  	}

     render() {
     	const { errorMsg } = this.state
        return (
        	<div className="alert alert-danger" role="alert">
  				  <i className="fas fa-exclamation-triangle"></i> {errorMsg}
			    </div>
        );
    }
}

export default ErrorMsg