import React from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import {FaArrowCircleLeft} from 'react-icons/fa';

export default function Send(){
    const history = useHistory();
    
    return(
        <Container>
            <FaArrowCircleLeft onClick={() => history.push('/')} className="icon" />
            <h1>Enviar Prova</h1>
            <p>Em breve funcionando...</p>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    .icon{
        position: fixed;
        top: 50px;
        left: 50px;
        color: #744eaa;
        font-size: 50px;
        cursor: pointer;
    }
    h1{
        font-size: 40px;
        font-weight: 900;
        color: #525562;
        margin: 0 auto;
        padding: 20px;
    }
    p{
        color: #525562;
        font-size: 20px;
    }
    @media (max-width: 900px){
        .icon{
            top: 10px;
            left: 10px;
            font-size: 40px;
        }
    }
`;

