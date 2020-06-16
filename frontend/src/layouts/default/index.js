import React from 'react';
import PropTypes from 'prop-types';

import {Wrapper} from './styles';

import Header from '~/components/Header';

const DefaultLayout = (props) => (
    <Wrapper>
        <Header/>
        {props.children}
    </Wrapper>
);

DefaultLayout.propTypes = {
    children: PropTypes.element.isRequired
}

export default DefaultLayout;
