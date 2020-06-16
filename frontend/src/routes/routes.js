import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';

import AuthLayout from '~/layouts/auth';
import DefaultLayout from '~/layouts/default';

import {store} from '~/store';

const RouteWrapper = ({
    component: Component,
    isPrivate,
    ...rest /* todo o resto path, exact... */
}) => {
    const signed = store.getState().auth.signed;

    if(!signed && isPrivate)
        return <Redirect to="/"/>

    if(signed && !isPrivate)
        return <Redirect to="/dashboard"/>

    const Layout = signed ? DefaultLayout : AuthLayout;

    return <Route {...rest}
        /* dentro do props vem o history e tals */
        render={props => (
            <Layout>
                <Component {...props}/>
            </Layout>
        )}
    />;
}

// PropTypes
RouteWrapper.propTypes = {
   isPrivate: PropTypes.bool,
   component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
};

RouteWrapper.defaultProps = {
    isPrivate: false,
}

export default RouteWrapper;
