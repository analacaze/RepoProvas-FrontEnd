import React, { useState } from 'react';
import styled from 'styled-components';
import {IoMdArrowDropdown} from 'react-icons/io';

export default function Selection(props){
    const {setSelection} = props;
    const [openSelection, setOpenSelection] = useState(false);
    const [text, setText] =  useState('Por Professores')
    
    function select(number){
        if (number === 1){
            setText('Por Professores');
            setSelection(1);

        }else{
            setText('Por Disciplinas');
            setSelection(2);
        }
    }
    
    return(
        <>
        <Container onClick={() => openSelection ? setOpenSelection(false) : setOpenSelection(true)}>
            <div>
                {text}
                <IoMdArrowDropdown /> 
            </div>
            {openSelection ? 
                (<ul>
                    <li onClick={() => select(1)} >Por Professores</li>
                    <li onClick={() => select(2)} >Por Disciplinas</li>
                </ul> ) : 
                undefined}          
        </Container>
        </>
    );
}

const Container = styled.div`
    width: 200px;
    border-radius: 5px;
    font-size: 24px;
    color: #fff;
    background: #525562;
    border: 1px solid #525562;
    cursor: pointer;
    div{
        display: flex;
        justify-content: space-between;
        padding: 2px;
    }
    ul{
        display: flex;
        flex-direction: column;
        background: #949494;
        li{
            padding: 5px;
            border: 1px solid #525562;
        }
    }
`;

