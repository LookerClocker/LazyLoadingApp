import React from 'react'

const DummyTable = (props) => (
    <tr>
        <td>{props.route.customProps.id}</td>
        <td>{props.route.customProps.title}</td>
        <td>{props.route.customProps.order}</td>
        <td>{props.route.customProps.path}</td>
    </tr>
);

export default DummyTable
