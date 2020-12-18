import React from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';

export default function Main(){
    const history = useHistory();
    
    return(
        <Container>
            <Title>
                <img src="/images/logo.png" />
                <h1>RepoProvas</h1>
            </Title> 
            <button onClick={() => history.push('/visualizar')}>
                Visualizar Provas
            </button>
            <button onClick={() => history.push('/enviar')}>
                Enviar Prova
            </button>           
        </Container>
    );
}

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    button{
        background: #744eaa;
        padding: 15px;
        border-radius: 10px;
        margin: 15px;
        color: #fff;
        font-size: 24px;
        box-shadow: 0 5px 5px 0 #525562;
    }
    @media (max-width: 900px){
        padding: 50px 20px;
    }
`;

const Title = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    img{
        width: 8%;
        margin: 10px;
    }
    h1{
        font-size: 45px;
        font-weight: 900;
        color: #525562;
    }
    @media (max-width: 900px){
        margin-bottom: 50px;
        img{
            width: 70px;
        }
        h1{
            font-size: 38px;
        }
    }
`;