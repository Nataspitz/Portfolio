import styled from "styled-components";
import { StylePageContainer } from "../containers/pageContainer/StylePageContainer";

export interface IProps {
    display?: string
}

export const StyleMain = styled.main<IProps>`
    width: 100%;
    min-height: 100vh;
    margin-top: 70px !important;

    ${StylePageContainer}{
        display: flex;
        max-width: 900px;
        padding: 0 20px;
        margin: auto;
        height: 100%;
    }

`