import styled from 'styled-components';

export const Wrapper = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 400px;
    overflow: scroll;
    max-height: 400px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`
export const Heading = styled.h4`
    background-color: beige;
    margin: 0;
    padding: 20;
`
export const Button = styled.button`
    position: absolute;
    top: 18px;
    right: 12px;
    background: transparent;
    border: unset;
    font-size: 18px;
    cursor: pointer;

    &:hover {
        opacity: 0.5;
    }
`