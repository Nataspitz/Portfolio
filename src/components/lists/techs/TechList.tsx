import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs, faPython, faNode, faReact, faNpm, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { StyledTechList } from "./StyleTechsList";

interface TechIcon {
  icon: any; // ajuste o tipo conforme necessário
  name: string;
}

export function TechList() {
  const icons: TechIcon[] = [
    { icon: faHtml5, name: "HTML5" },
    { icon: faCss3, name: "CSS3" },
    { icon: faJs, name: "JavaScript" },
    { icon: faPython, name: "Python" },
    { icon: faNode, name: "Node.js" },
    { icon: faReact, name: "React" },
    { icon: faNpm, name: "npm" },
    { icon: faNodeJs, name: "Node.js" },
  ];

  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    // Função para avançar automaticamente o slide
    const autoSlide = setInterval(() => {
      setCurrentPosition((prevPosition) => {
        const newPosition = prevPosition + 1;
        return newPosition < icons.length ? newPosition : 0;
      });
    }, 1000); // Tempo em milissegundos (1 segundo neste exemplo). Ajuste conforme necessário.

    // Limpar o intervalo após uma hora (3600000 milissegundos)
    setTimeout(() => {
      clearInterval(autoSlide);
    }, 3600000);

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(autoSlide);
  }, [icons.length]);

  // Criar um array com uma quantidade dinâmica de ícones
  const duplicatedIcons: TechIcon[] = icons.flatMap(() => icons);

  return (
    <StyledTechList>
      <div className="slider">
        <ul style={{ transform: `translateX(-${currentPosition * 60}px)` }}>
          {duplicatedIcons.map((item, index) => (
            <li key={index}>
              <FontAwesomeIcon icon={item.icon} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </StyledTechList>
  );
}
