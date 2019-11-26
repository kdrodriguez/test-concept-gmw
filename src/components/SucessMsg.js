import React, { Component } from 'react'

class SuccessMsg extends Component {

	constructor(props){
   		super(props);
    	this.state = {
      		sucessMsg: this.props.sucessMsg,
   		}
  	}

     render() {
     	const { sucessMsg } = this.state
        return (
        	<div className="alert alert-success" role="alert">
  				  <i className="fas fa-check-square"></i> {sucessMsg}
			    </div>
        );
    }
}

export default SuccessMsg