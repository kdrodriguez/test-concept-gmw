import React, { Component } from 'react'
import { TreeView } from '@material-ui/lab';
import TreeItem from '@material-ui/lab/TreeItem';

class CarpetasMaterialUI extends Component {
  render() {
    return (
      <TreeView>
        <TreeItem nodeId="1" label="Applications">
          <TreeItem nodeId="2" label="Calendar" />
          <TreeItem nodeId="3" label="Chrome" />
          <TreeItem nodeId="4" label="Webstorm" />
          <TreeItem nodeId="5" label="Maxthon">
            <TreeItem nodeId="6" label="Chrome" />
            <TreeItem nodeId="7" label="Webstorm" />
          </TreeItem>
        </TreeItem>
        <TreeItem nodeId="8" label="Applications">
          <TreeItem nodeId="9" label="Calendar" />
          <TreeItem nodeId="10" label="Chrome" />
          <TreeItem nodeId="11" label="Webstorm" />
          <TreeItem nodeId="12" label="Maxthon">
            <TreeItem nodeId="13" label="Chrome" />
            <TreeItem nodeId="14" label="Webstorm" />
          </TreeItem>
        </TreeItem>
      </TreeView>
      
    )
  }
}


export default CarpetasMaterialUI