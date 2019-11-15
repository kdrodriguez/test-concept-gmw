import React, { Component } from 'react'
//import Spinner from 'react-spinner-material';
//import LoadingOverlay from 'react-loading-overlay';

//import { PushSpinner } from "react-spinners-kit";

//import ReactLoading from 'react-loading';

class SpinnerData extends Component {

     render() {
        return (
          <div className="text-center bg-transparent h-100">
            <div className="spinner-grow spinner-grow-3x" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        );
    }
}

export default SpinnerData