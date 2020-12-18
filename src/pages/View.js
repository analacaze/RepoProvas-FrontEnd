import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import {FaArrowCircleLeft} from 'react-icons/fa';
import axios from 'axios';
import Selection from '../components/Selection';

export default function View(){
    const history = useHistory();
    const [selection, setSelection] = useState(1);
    const [teachers, setTeachers] = useState([]);
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        const request = axios.get('http://localhost:3000/api/teachers');
        request.then(response => {
        setTeachers(response.data);
        }).catch(() => console.log("erro"));
    },[]);
    useEffect(() => {
        const request = axios.get('http://localhost:3000/api/subjects');
        request.then(response => {
        setSubjects(response.data);
        }).catch(() => console.log("erro"));
    },[]);
    
    return(
        <Container>
            <FaArrowCircleLeft onClick={() => history.push('/')} className="icon" />
            <h1>Listar Provas</h1>
            <Selection setSelection={setSelection}/>
            <div className='title'>
                <h2>Nome</h2>
                <h2>N° de <br />provas</h2>
            </div>            
            {selection === 1 ? 
                <List>
                    {teachers.map(teacher => {
                        return(
                            <li key={teacher.id} onClick={() => history.push(`/visualizar/por-professor/${teacher.id}`)}>
                                <h2>{teacher.name}</h2>
                                <h2>{teacher.number}</h2> 
                            </li>
                        );
                    })}
                </List>
            :
                <List>
                    {subjects.map(subject => {
                        return(
                            <li key={subject.id} onClick={() => history.push(`/visualizar/por-disciplina/${subject.id}`)}>
                                <h2>{subject.name}</h2>
                                <h2>{subject.number}</h2> 
                            </li>
                        );
                    })}
                </List>}            
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
    .title{
        margin-top: 20px;
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
    @media (max-width: 900px){
        .icon{
            top: 10px;
            left: 10px;
            font-size: 40px;
        }
        .title{
            width: 80%;
        }
    }
`;

const List = styled.ul`
    margin-top: 20px;
    width: 30%;
    height: 55vh;
    overflow: scroll;
    li{
        cursor: pointer;
        padding: 5px;
        border: 1px solid #525562;
        display: flex;
        justify-content: space-between;
        h2{
            font-size: 22px;
            padding: 5px;
        }
    }
    li:hover{
        background: #525562;
        color: #FFF;
    }
    @media (max-width: 900px){
        width: 80%;
    }
`;
