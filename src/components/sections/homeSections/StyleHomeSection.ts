import styled from "styled-components";
import background from "../../../assets/header-background.png";

export const StyleHomeSection = styled.section`
  width: 100%;
  height: 100%;
  background-size: cover;

  @media (min-width: 768px) {
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: right -15px center;
    background-size: 50%; /* Ajuste a porcentagem conforme necessário */
  }

  @media (max-width: 767px) {
    background-image: none; /* Oculta a imagem em telas menores que 768px */
  }
`;
