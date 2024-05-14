import styles from "./NftNavigation.module.scss";
import Image from "next/image";
import Link from "next/link";
import { SearchNfts } from "@/features/nft/searchNfts";

interface INftNavigation {
  activeCategory: string;
}

export function NftNavigation({ activeCategory }: INftNavigation) {
  const category = activeCategory;

  return (
    <div className={styles.nftNavigation}>
      <div className={styles.nftNavigationContainer}>
        <nav className={styles.nftNavigationMenu}>
          <ul className={styles.nftNavigationList}>
            <Link href="/characters">
              <li
                className={
                  category === "characters"
                    ? styles.activeNavigationItem
                    : styles.nftNavigationItem
                }
              >
                <Image
                  src="/images/characters-icon.png"
                  alt="icon"
                  width={32}
                  height={32}
                />
                Characters
              </li>
            </Link>
            <Link href="/planets">
              <li
                className={
                  category === "planets"
                    ? styles.activeNavigationItem
                    : styles.nftNavigationItem
                }
              >
                <Image
                  src="/images/planets-icon.png"
                  alt="icon"
                  width={32}
                  height={32}
                />
                Planets
              </li>
            </Link>
            <Link href="/items">
              <li
                className={
                  category === "items"
                    ? styles.activeNavigationItem
                    : styles.nftNavigationItem
                }
              >
                <Image
                  src="/images/items-icon.png"
                  alt="icon"
                  width={32}
                  height={32}
                />
                Items
              </li>
            </Link>
            <Link href="bundles">
              <li
                className={
                  category === "bundles"
                    ? styles.activeNavigationItem
                    : styles.nftNavigationItem
                }
              >
                <Image
                  src="/images/bundles-icon.png"
                  alt="icon"
                  width={32}
                  height={32}
                />
                Bundles
              </li>
            </Link>
          </ul>
        </nav>
        <SearchNfts />
      </div>
    </div>
  );
}
