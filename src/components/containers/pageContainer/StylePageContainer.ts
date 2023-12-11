import styled, { css } from "styled-components";

interface IProps {
    display?: string
}


export const StylePageContainer = styled.div<IProps>`
    display: flex;
    flex-direction: column;
    max-width: 900px;
    padding: 0 20px;
    margin: auto;
    height: 100%;
    
    ${({ display }) =>{
        if (display === "none") {
            return css`
                @media(max-width: 768px;){
                    display: none;
                    background-color: red;
                }
            `
        }
    }}
`
