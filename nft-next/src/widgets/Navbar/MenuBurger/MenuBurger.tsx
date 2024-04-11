import styles from "./MenuBurger.module.scss";
import { useDispatch } from "react-redux";
import { change } from "@/app/store/menuSlice/menuSlice";

export function MenuBurger() {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        if (window.innerWidth > 768) return;
        dispatch(change());
      }}
      className={styles.menuBurgerBlock}
    >
      <div className={styles.menuBurger}>
        <span></span>
        <span></span>
        <nav className={styles.menuBlock}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>Roadmap</li>
            <li className={styles.menuItem}>Roadmap</li>
            <li className={styles.menuItem}>Roadmap</li>
            <li className={styles.menuItem}>Roadmap</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
