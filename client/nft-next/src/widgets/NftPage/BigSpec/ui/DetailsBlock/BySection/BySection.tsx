import styles from "./BySection.module.scss";
import type { INft, IBundleNft, IPlanetNft } from "@/entities/nft/api/types";
import Image from "next/image";

interface IBySection {
  nftItem: INft;
}

export function BySection({ nftItem }: IBySection) {
  return (
    <div className={styles.byBlock}>
      <div className={styles.ownedBy}>
        <h4 className={styles.ownedByTitle}>Owned by</h4>
        <div className={styles.ownedByContent}>
          <Image src="/images/ava.png" alt="img" width={48} height={48} />
          <div className={styles.ownerCredentials}>
            <p className={styles.ownerName}>
              {(nftItem as IBundleNft).nftDetails.ownedBy.owner}
            </p>
            <p className={styles.ownerId}>
              {(nftItem as IBundleNft).nftDetails.ownedBy.id}
            </p>
          </div>
        </div>
      </div>
      {nftItem.nftType === "planets" && (
        <div className={styles.found}>
          <h4 className={styles.foundTitle}>Found</h4>
          <div className={styles.foundContent}>
            <Image
              src="/images/astronaut.png"
              alt="img"
              width={48}
              height={48}
            />
            <div className={styles.foundCalendar}>
              <p className={styles.foundDay}>8 days ago</p>
              <p className={styles.foundDate}>
                {(nftItem as IPlanetNft).nftDetails.found}
              </p>
            </div>
          </div>
        </div>
      )}
      {nftItem.nftType === "bundles" && (
        <div className={styles.usedFor}>
          <h4 className={styles.usedForTitle}>Used for</h4>

          <div className={styles.usedForContent}>
            {(nftItem as IBundleNft).nftDetails.usedFor.map(
              (bundleItemUser: string) => {
                return (
                  <>
                    <Image
                      src={bundleItemUser}
                      width={48}
                      height={48}
                      alt="img"
                    />
                  </>
                );
              }
            )}
          </div>
        </div>
      )}
    </div>
  );
}
