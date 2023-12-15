import { useState } from 'react';
import { HeaderContainer } from "../../components/containers/headerContainer/HeaderContainer";
import { Menu } from "../../components/menu/Menu";
import { useSpring, config } from "react-spring";


export function Header() {

  const [openMenu, setOpenMenu] = useState(false);

  const openMenuConfig = {
    opacity: 1,
    transform: 'translateY(0%)',
    config: config.slow,
  };

  const closeMenuConfig = {
    opacity: 0,
    transform: 'translateY(-100%)',
    config: config.slow,
  };

  const menuAnimation = useSpring(openMenu ? openMenuConfig : closeMenuConfig);

  return (
    <>
      <HeaderContainer openMenu={openMenu} setOpenMenu={setOpenMenu} />
      {menuAnimation.opacity.to((o) => o > 0.5) && (
        openMenu ? 
          <Menu
            menuAnimation={menuAnimation}
            setOpenMenu={setOpenMenu}
          />
        : null
      )}
    </>
  );
}
