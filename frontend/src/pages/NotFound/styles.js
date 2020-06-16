import styled from 'styled-components';

export const Container = styled.div`
    h1{
        font-size: 30px;
        color: #fff;
        margin-bottom: 10px;
    }

    img{
        position: absolute;
        opacity: 0.2;
        height: 500px;
        top: 5%;
        left: 50%;
    }

    a{
        cursor: pointer;

        button{
            font-weight: bold;
            font-size: 17px;
            padding: 10px;
            background: transparent;
            border: 0;
            color: #fff;
        }
    }
`;
