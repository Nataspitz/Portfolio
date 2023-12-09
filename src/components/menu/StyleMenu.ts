import styled from "styled-components";
import { animated } from "react-spring";


export const StyleMenu = styled(animated.div)`
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: auto;
    background-color: var(--grey-5);
    z-index: 0;

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 15px;
        gap: 8px;

        a {
            color: var(--grey-3);
            font-size: var(--caption-font-size);
            background-color: transparent;
            padding: 8px 16px;

        }
        a:focus{
            color: var(--grey-1);
        }
    }

    @media (min-width: 768px) {
        position: static;
    }
`
