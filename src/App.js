import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Main from './pages/Main';
import View from './pages/View';
import Send from './pages/Send';

export default function App() {
  return (
    <Container>
        <Router>
            <Switch>
                <Route path='/enviar' component={Send} />
                <Route path='/visualizar' component={View} />
                <Route path='/' component={Main} />
            </Switch>
        </Router>
    </Container>
  );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url("./images/background.png");
    background-size: 100% 100%;
    @media (max-width: 900px){
        background-size: auto 105%;
        background-position: center;
    }
`;
