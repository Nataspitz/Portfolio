import styled from "styled-components";

export const StyleHeader = styled.header`
    background-color: var(--grey-5);
    padding: 15px 40px;
    height: 60px;
    border-bottom: 2px solid var(--color-primary);

    .containerHeader{
        display: flex;
        justify-content: space-between;
        align-items: center;

        svg{
            cursor: pointer;
            color: var(--grey-1);
        }

        div{
            background-color: var(--grey-4);
            border-radius: 3px;
            height: 25px;
            width: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .menu{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

`