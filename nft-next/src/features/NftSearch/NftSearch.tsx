import styles from "./NftSearch.module.scss";
import Image from "next/image";

export function NftSearch() {
  return (
    <div className={styles.nftSearchBlock}>
      <Image
        src="/icons/magnify-glass.svg"
        alt="glass"
        width={24}
        height={24}
      />
      <input
        placeholder="Search character, planet, item..."
        className={styles.nftSearch}
        type="search"
      />
    </div>
  );
}
