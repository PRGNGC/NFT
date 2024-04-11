import styles from "./PlayButton.module.scss";
import Link from "next/link";

export function PlayButton() {
  return (
    <Link href="/" className={styles.playButton}>
      Play Now
    </Link>
  );
}
