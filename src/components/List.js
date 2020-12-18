import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import {FaArrowCircleLeft} from 'react-icons/fa';

export default function List(props){
    const { type } = props;
    const { id } = useParams();
    const history = useHistory();
    const [data, setData] = useState ([]);

    useEffect(() => {
        if (type === 1){
            const request = axios.get(`http://localhost:3000/api/tests/teacher/${id}`);
            request.then(response => {
            setData(response.data);
            }).catch(() => console.log("erro"));
        }else{
            const request = axios.get(`http://localhost:3000/api/tests/subject/${id}`);
            request.then(response => {
            setData(response.data);
            }).catch(() => console.log("erro"));
        }        
    },[]);

    return(
        <Container>
            <FaArrowCircleLeft onClick={() => history.push('/visualizar')} className="icon" />
            <div className='title'>
                <h2>Nome</h2>
                <h2>Categoria</h2>
                {type === 1 ? <h2>Disciplina</h2> : <h2>Professor</h2>}
            </div>
            <ul>
                {data.map((test,i) => {
                    return(
                        <li key={i} onClick={() => window.location.href = test.link}>
                            <h2>{test.nomeProvas}</h2>
                            <h2>{test.nomeCategoria}</h2>
                            {type === 1 ? <h2>{test.nomeDisciplina}</h2> : <h2>{test.nomeProfessor}</h2>}
                        </li>
                    );                
                })}
            </ul>
            
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .title{
        margin-top: 100px;
        font-size: 18px;
        width: 30%;
        padding: 5px 20px;
        background: #525562;
        color: #FFF;
        border: 1px solid #525562;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 5px;
    }
    .icon{
        position: fixed;
        top: 50px;
        left: 50px;
        color: #744eaa;
        font-size: 50px;
        cursor: pointer;
    }
    ul{
        margin-top: 20px;
        width: 30%;
        height: 55vh;
        overflow: scroll;
    }
    li{
        display: flex;
        justify-content: space-between;
        padding: 20px;
        border: 1px solid #525562;
        margin-bottom: 20px;
        border-radius: 5px;
        cursor: pointer;
    }
    li:hover{
        background: #525562;
        color: #FFF;
    }
    h2:last-child{
        width: 40%;
    }
`;