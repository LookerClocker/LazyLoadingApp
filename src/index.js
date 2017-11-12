import { render } from 'react-dom';
import React from 'react';
import Root from 'tabs/routes';
import 'general.scss';

render(
    <Root />,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('tabs/routes', () => {
        const NewRoot = require('tabs/routes').default;

        render(
            <NewRoot />,
            document.getElementById('root')
        );
    });
}