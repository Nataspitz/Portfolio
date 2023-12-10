import styled from "styled-components";

export const StyledTechList = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: center;
  gap: 10px;
  overflow: hidden; 
  padding: 20px;
  position: relative;
  width: 100%;
  z-index: 0;

  ul {
    display: flex;
    align-items: center;
    gap: 10px;
    list-style: none;
    padding: 0;
    margin: 0;
    transition: transform 0.5s ease;

    li {
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 100px;
      width: 50px;
      border-radius: 20px;
      padding: 10px;
      background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));

      svg {
        width: 50px;
        height: 50px;
        color: var(--grey-3);
      }

      p {
        font-size: 1rem;
        color: var(--grey-3);
      }
    }
  }


  @media(min-width: 768px){
    width: 50%;
  }
`;
