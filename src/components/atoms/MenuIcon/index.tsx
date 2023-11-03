import { FC } from "react";
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import styles from "./MenuIcon.module.scss";

interface MenuIconProps {
  menuActive: boolean;
  width: number;
  setMenuActive: any
}

const MenuIcon: FC<MenuIconProps> = ({ menuActive, setMenuActive, width }: MenuIconProps) => {

  const handleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      {width < 768 ?
        <section className={menuActive ? styles.iconActive : styles.iconInactive}>
          {menuActive ? (
            <FaRegWindowClose onClick={handleMenu} />
          ) : (
            <FaBars onClick={handleMenu} />
          )}
        </section>: ""}
    </>
  );
};

export default MenuIcon;
