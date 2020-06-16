import React from 'react';

import {Container} from './styles';

import Logo from '~/assets/logo.svg';

const Default = () => (
    <Container>
        <h1>Hey, essa página não existe :/</h1>
        <img src={Logo} alt="Logo"/>
        <a href="/"><button>voltar</button></a>
    </Container>
)

export default Default;
