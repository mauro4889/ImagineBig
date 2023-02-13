import styled from "styled-components";


export const ProductsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 6fr 6fr;
    gap: 1em;
    grid-row-gap: 3em;
    align-content: center;
    margin-top: 2em;
    @media (min-width: 1023px){
        margin-top: 6em;
    }
`