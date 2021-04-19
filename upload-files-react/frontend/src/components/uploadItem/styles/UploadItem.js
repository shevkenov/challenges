import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: calc(100% - 50px) 50px;
    padding: 16px;
    box-shadow: 0px 1px 2px lightgray;
`;

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 8px;
`;

export const ProgressBar = styled.div`
    width: 100%;
    height: 15px;
    background-color: lightgray;
    margin-bottom: 8px;
    border-radius: 20px;
`;

export const Progress = styled.div`
    height: 15px;
    background-color: lightgreen;
    border-radius: 20px;
    ${({width}) => `width: ${width}%`}
`;

export const Label = styled.div`
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
`;

export const Percentage = styled.div`
    margin-left: 12px;
`;

