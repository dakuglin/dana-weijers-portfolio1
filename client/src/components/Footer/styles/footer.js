import styled from "styled-components";

export const Container = styled.div`
    padding: 10px 10px;
    background-color: #C38D9E;
    text-align:center;
    font-family: 'IM Fell English', serif;
    font-style: italic;  
    margin-top: 58px;
`
export const Wrapper = styled.div`
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // max-width: 1000px;
    margin: 0 auto;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    tex-align: left;
    margin-left: 60px;
`

export const Row = styled.div`
    // display: block;
    // grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    // grid-gap: 20px;
    display: flex;
    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`

export const Link = styled.div`
    color: #fff;
    font-size: 25px;
    font-weight: bold;
    &:hover {
        color: #ff9c00;
        transition: 200ms ease-in;
    }

`

export const Title = styled.div`
    font-size: 24px;
    color: #fff;
    margin-bottom: 40px;
    font-weight:bold;
`