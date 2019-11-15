import React from 'react';
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';

const iconFol =  <i className="fas fa-folder" />;

const nodes = [{
    value: 'all',
    icon: iconFol,
    label: 'Documentos',
    showCheckbox: false,
},
{
    value: 'mars',
    label: 'Mars',
    icon: iconFol,
    showCheckbox: false,
    showNodeIcon: false,
    children: [
        { value: 'phobos', label: 'Phobos', showCheckbox: false, icon: iconFol, children: [{value:'te', label:'Un planeta desconocido', showCheckbox: false, icon: iconFol, children: [{ value: 'moon', label: 'Saturno grande', showCheckbox: false, icon: iconFol, children: [{ value: 'moon', label: 'Saturno pequeñiiiito', showCheckbox: false, icon: iconFol, },] },], }] },
        { value: 'deimos', label: 'Deimos', showCheckbox: false, icon: iconFol,},
    ],
},
{
    value: 'earth',
    label: 'Earth',
    showCheckbox: false,
    icon: iconFol,
    children: [
        { value: 'moon', label: 'Moon', showCheckbox: false, icon: iconFol, },
    ],

    
}];

class Widget extends React.Component {
    constructor() {
        super();

        this.state = {
            checked: [],
            expanded: [],
        };
    }

    render() {
        return (
            <CheckboxTree
                nodes={nodes}
                checked={this.state.checked}
                expanded={this.state.expanded}
                onCheck={checked => this.setState({ checked })}
                onExpand={expanded => this.setState({ expanded })}
            />
        );
    }
}

export default Widget