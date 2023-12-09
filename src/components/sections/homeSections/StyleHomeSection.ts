import styled from "styled-components";
import background from "../../../assets/header-background.png"


export const StyleHomeSection = styled.section`
    margin-top: 70px;
    width: 100%;
    
    @media(min-width: 768px){
        background-image: url(${background});
        background-repeat: no-repeat;
        background-position: right -15px center;
    }

`