import React, { Component } from 'react'
import Spinner from 'react-spinner-material';
//import LoadingOverlay from 'react-loading-overlay';

//import { PushSpinner } from "react-spinners-kit";

import ReactLoading from 'react-loading';

class SpinnerData extends Component {

     render() {
        return (
          <div class="text-center bg-transparent h-100">
            <div class="spinner-grow spinner-grow-3x" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        );
    }
}

/* ----- react-spinner-material
  return (
      <div className="justify-content-center">
        <Spinner size={90} spinnerColor={"#333"} spinnerWidth={2} visible={true} />
      </div>
    )
*/

export default SpinnerData
