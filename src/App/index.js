import React, {PropTypes} from 'react';
import Header from '../common/Header';
import tabs from '../../tabs.json';

let sortedTabs = tabs.sort((prev, next) => {
    if (prev.order > next.order) {return 1;}
    if (prev.order < next.order) {return -1;}
});

const App = (props) => (
    <div>
        <Header tabs={sortedTabs}/>
        <table className="container">
            <thead>
            <tr>
                <th><h1>Id</h1></th>
                <th><h1>Title</h1></th>
                <th><h1>Order</h1></th>
                <th><h1>Path</h1></th>
            </tr>
            </thead>
            <tbody>
            {props.children}
            </tbody>
        </table>
    </div>
);

export default {component: App, props: sortedTabs}