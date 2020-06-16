import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import {Container, Content, Profile} from './styles';

import Notifications from '~/components/Notifications';
import Logo from '~/assets/logo-interna.svg';

const Header = () => {
    const profile = useSelector(state => state.user.profile);

    const avatar = profile.avatar ? profile.avatar.url : "https://api.adorable.io/avatars/50/abott@adorable.png";

    return(
        <Container>
            <Content>
                <nav>
                    <img src={Logo} alt="GoBarber"/>
                    <Link to="/dashboard">DASHBOARD</Link>
                </nav>

                <aside>
                    <Notifications/>

                    <Profile>
                        <div>
                            <strong>{profile.name}</strong>
                            <Link to="/profile">Meu perfil</Link>
                        </div>

                        <img src={avatar} alt="Matheus Andrade"/>
                    </Profile>
                </aside>
            </Content>
        </Container>
    )
}

export default Header;
