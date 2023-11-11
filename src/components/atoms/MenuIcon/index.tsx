import { FC } from "react";
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import styles from "./MenuIcon.module.scss";

interface MenuIconProps {
  menuActive: boolean;
  setMenuActive: any;
}

const MenuIcon: FC<MenuIconProps> = ({
  menuActive,
  setMenuActive,
}: MenuIconProps) => {
  const handleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      {/* Unificar estilos para no repetir codigo */}
      <section className={menuActive ? styles.iconActive : styles.iconInactive}>
        {menuActive ? (
          <FaRegWindowClose onClick={handleMenu} />
        ) : (
          <FaBars onClick={handleMenu} />
        )}
      </section>
    </>
  );
};

export default MenuIcon;
