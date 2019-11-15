import * as React from 'react';
import '../styles/bootstrap4-Styles/bootstrap4.css'; 
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

export default class Tree extends React.Component {
    constructor() {
        super(...arguments);
        
        this.fields = { dataSource: this.props.data, id: 'id', text: 'name', child: 'children',  selected: 'isSelected' };
        this.selectedNodes = [];
        this.cssClass = 'custom';
    }

    nodeSelected() {
        alert("The selected node's id: " + this.selectedNodes); // To alert the selected node's id.
    }

    nodeTemplate(data) {
      return (<div> <i className="fas fa-folder" /> {data.name} </div>)
    }

    render() {
        return (
        <div className="container-fluid">
        <TreeViewComponent fields={this.fields} selectedNodes={this.selectedNodes} nodeSelected={this.nodeSelected} cssClass={this.cssClass} nodeTemplate={this.nodeTemplate} />
        </div>
        )
    }
  }