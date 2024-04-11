import styles from "./NavMenu.module.scss";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { close } from "@/app/store/menuSlice/menuSlice";

export function NavMenu() {
  const dispatch = useDispatch();

  return (
    <div className={styles.navMenuBlock}>
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
