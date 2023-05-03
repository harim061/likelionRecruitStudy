import styled, { keyframes } from 'styled-components';

const Father = styled.div`
    display: flex;
    background-color: ${(props) => props.theme.backgroundColor};
`;

const rotateAnimation = keyframes`
    0%{
        transform: rotate(0deg);
        border-radius: 0px;
    } 
    50%{
        transform: rotate(360deg);
        border-radius: 100px;
    }
    100%{
        transform: rotate(0deg);
        border-radius: 0px;
    }
`;

const Emoji = styled.span`
    font-size: 36px;
`;

const Title = styled.div`
    color: ${(props) => props.theme.textColor};
`;

const Box = styled.div`
    background-color: tomato;
    width: 200px;
    height: 200px;
    animation: ${rotateAnimation} 1s linear infinite;
    display: flex;
    justify-content: center;
    align-items: center;

    ${Emoji} {
        &:hover {
            font-size: 90px;
        }
    }
`;

function App() {
    return (
        <Father>
            <Title>hello</Title>
        </Father>
    );
}

export default App;
