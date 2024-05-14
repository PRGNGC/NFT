"use client";

import styles from "./NavMenu.module.scss";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { close } from "@/app/store/menuSlice/menuSlice";

export function NavMenu() {
  const menuActive = useSelector((state: any) => state.menu.value);
  const dispatch = useDispatch();

  return (
    <div
      style={{ display: menuActive ? "block" : "none" }}
      className={styles.navMenuBlock}
    >
      <ul className={styles.navMenuList}>
        <Link
          onClick={() => {
            dispatch(close());
          }}
          className={styles.navMenuItem}
          href="/"
        >
          <li>Roadmap</li>
        </Link>
        <Link
          onClick={() => {
            dispatch(close());
          }}
          className={styles.navMenuItem}
          href="/"
        >
          <li>Roadmap</li>
        </Link>
        <Link
          onClick={() => {
            dispatch(close());
          }}
          className={styles.navMenuItem}
          href="/"
        >
          <li>Roadmap</li>
        </Link>
        <Link
          onClick={() => {
            dispatch(close());
          }}
          className={styles.navMenuItem}
          href="/"
        >
          <li>Roadmap</li>
        </Link>
      </ul>
    </div>
  );
}
