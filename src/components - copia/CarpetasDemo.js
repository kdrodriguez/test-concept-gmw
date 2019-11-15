import React, { Component } from 'react'

class CarpetasDemo extends Component {
  render() {
    return (
      
      <nav id="navbar-example3" class="navbar navbar-light bg-light ml-n4">
      
         <nav class="nav nav-link flex-column">
          <a class="nav-link" href="#item-1"> <i className="fas fa-folder"></i> Item 1</a>
            <nav class="nav nav-pills flex-column">
              <a class="nav-link ml-3 my-1" href="#item-1-1"><i className="fas fa-folder"></i> Item 1-1</a>
                <nav class="nav-link flex-column">
                  <a class="nav-link ml-3 my-1" href="#item-1-1"> <i className="fas fa-folder"></i> Item 1-1-1</a>
                  <a class="nav-link ml-3 my-1" href="#item-1-2"> <i className="fas fa-folder"></i> Item 1-1-2</a>
                    <nav class="nav-link flex-column">
                      <a class="nav-link ml-3 my-1" href="#item-1-1"><i className="fas fa-folder"></i> Item 1-1-2-1</a>
                      <a class="nav-link ml-3 my-1" href="#item-1-2"><i className="fas fa-folder"></i> Item 1-1-2-2</a>
                    </nav>
                </nav>
              <a class="nav-link ml-3 my-1" href="#item-1-2"><i className="fas fa-folder"></i> Item 1-2</a>
            </nav>
    <a class="nav-link" href="#item-2"><i className="fas fa-folder"></i> Item 2</a>
    <a class="nav-link" href="#item-3"><i className="fas fa-folder"></i> Item 3</a>
    <nav class="nav nav-pills flex-column">
      <a class="nav-link ml-3 my-1" href="#item-3-1"><i className="fas fa-folder"></i> Item 3-1</a>
      <a class="nav-link ml-3 my-1" href="#item-3-2"><i className="fas fa-folder"></i> Item 3-2</a>
    </nav>
  </nav>
</nav>
    )
  }
}


export default CarpetasDemo