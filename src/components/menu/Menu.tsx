import { Link } from "react-router-dom";
import { StyleMenu } from "./StyleMenu";
import { SpringValue } from "react-spring";


interface IPropsMenu {
    menuAnimation?: {
        opacity: SpringValue<number>;
        transform: SpringValue<string>;
    };
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export function Menu({ menuAnimation, setOpenMenu }: IPropsMenu) {
    
  return (
    <StyleMenu style={menuAnimation}>
      <ul>
        <li>
          <Link to="/"  onClick={() => setOpenMenu(false)}>Home</Link>
        </li>
        <li>
          <Link to="/projetos" onClick={() => setOpenMenu(false)}>Projetos</Link>
        </li>
        <li>
          <Link to="/contatos" onClick={() => setOpenMenu(false)}>Contatos</Link>
        </li>
        <li>
          <Link to="/midias" onClick={() => setOpenMenu(false)}>Midias Digitas</Link>
        </li>
      </ul>
    </StyleMenu>
  )
}
