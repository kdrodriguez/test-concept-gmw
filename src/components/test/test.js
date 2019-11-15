import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Badge } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (

    
   
<div class="btn-group container-fluid">
  <button type="button" class="btn bg-primary"> <a href="#" className="list-group-item list-group-item-action">
                  <div className="mt-n1 d-flex w-100 justify-content-between">
                  <h6 className="mb-0 font-weight-light small font-weight-bold">
                   <i className="far fa-file-pdf btn-danger"> </i> Titulo
                    </h6>
                    <div><small>fecha</small> <small>hola</small></div>               
                  </div>
              <p className="mb-n1 mt-n2 small"> <Badge pill color="primary">{document.type}</Badge>
               <small className="text-primary"> 
                  kevin Rodriguez
               </small>
               (2017)
              </p>                            
          </a></button>
  <button type="button" class="btn  dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <span class="sr-only">Toggle Dropdown</span>
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div>



       
    

    );
  }
}
