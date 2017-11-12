import React from 'react';
import { Link } from 'react-router';

const Header =(props) => (
    <nav className="navbar" role="navigation">
        {props.tabs.map((item, index) => <Link activeClassName="active" key={index} to={'/'+ item.id}>{item.id}</Link> )}
    </nav>
);

export default Header;