import React from 'react';
import {Router, browserHistory} from 'react-router';
import * as App from '../App/index';

function errorLoading(err) {
    console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
    return (module) => cb(null, module.default,);
}

let defaultRoute = [
    {
        path: '/',
        customProps: App.default.props[0],
        getComponent(location, cb) {
            System.import('tabs/' + App.default.props[0].id)
                .then(loadRoute(cb))
                .catch(errorLoading);
        },
        onEnter: (router, replace) => {  // replace doesn`t work for me
            if (router.location.pathname === '/') {
                browserHistory.push('/' + App.default.props[0].id)
            }
        }
    }
];

let customeRoutes = App.default.props.map((item) => {
        return {
            path: item.id,
            customProps: item,
            getComponent(location, cb) {
                System.import('tabs/' + item.id)
                    .then(loadRoute(cb))
                    .catch(errorLoading);
            }
        }
    }
);


const routes = {
    component: App.default.component,
    childRoutes: defaultRoute.concat(customeRoutes)
};

export default () => <Router history={browserHistory} routes={routes}/>;