import React from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import {FaArrowCircleLeft} from 'react-icons/fa';

export default function Send(){
    const history = useHistory();
    
    return(
        <Container>
            <FaArrowCircleLeft onClick={() => history.push('/')} className="icon" />
        </Container>
    );
}

const Container = styled.div`
    .icon{
        position: fixed;
        top: 50px;
        left: 50px;
        color: #744eaa;
        font-size: 50px;
        cursor: pointer;
    }
`;

