import styled from "styled-components";
import background from "../../assets/header-background.png"


export const StyleMain = styled.main`
    width: 100%;
    min-height: 100vh;

    .container{
        display: flex;
        align-items: center;
        max-width: 900px;
        padding: 0 20px;
        margin: auto;
        margin-top: 80px;
        height: 100%;
    }

    @media (min-width: 768px){
        background-image: url(${background});
        background-repeat: no-repeat;
        background-position: right -15px center;
    }

`