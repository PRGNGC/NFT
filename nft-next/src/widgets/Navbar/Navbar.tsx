"use client";
import styles from "./Navbar.module.scss";
import { Logo } from "./Logo";
import { MenuBurger } from "./MenuBurger";
import { PlayButton } from "./PlayButton";
import { Console } from "./Console";
import { NavMenu } from "./NavMenu";
import { useDispatch, useSelector } from "react-redux";
import { close, open, change } from "@/app/store/menuSlice/menuSlice";

export function Navbar() {
  const menuActive = useSelector((state: any) => state.menu.value);

  return (
    <div className={styles.navbarBlock}>
      {menuActive && <NavMenu />}
      <div className={styles.navbarContainer}>
        <MenuBurger />
        <Logo />
        <PlayButton />
        <Console />
      </div>
    </div>
  );
}
