import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
    color: ${(props) => props.theme.textColor};
`;
function App2() {
    return (
        <Container>
            <H1>App2</H1>
        </Container>
    );
}

export default App2;
