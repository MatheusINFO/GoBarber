import React from 'react';
import PropTypes from 'prop-types';

import {Wrapper, Content} from './styles';

const AuthLayout = (props) => (
    <Wrapper>
        <Content>
            {props.children}
        </Content>
    </Wrapper>
);

AuthLayout.propTypes = {
    children: PropTypes.element.isRequired
}

export default AuthLayout;
