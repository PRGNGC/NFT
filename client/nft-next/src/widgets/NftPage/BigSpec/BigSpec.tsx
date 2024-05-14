import styles from "./BigSpec.module.scss";
import type { NftItem } from "@/shared/types/types";

interface BigSpecType {
  nftItem: NftItem;
}

export function BigSpec({ nftItem }: BigSpecType) {
  return (
    <div className={styles.bigSpecBlock}>
      <div className={styles.bigSpecCommonInfo}>
        <div className={styles.nftNameId}>
          <span className={styles.nftId}>nftId</span>
          <h1 className={styles.nftName}>nftName</h1>
        </div>
        <div className={styles.nftPriceButton}>
          <span className={styles.nftPrice}>nftPrice</span>
          <button className={styles.nftButton}>nftButtonPurchase now</button>
        </div>
      </div>

      <div className={styles.nftOtherInfo}>
        <div className={styles.nftDescription}>
          Description
          <div className={styles.nftLocation}>nftLocation</div>
          <div className={styles.descriptionText}>descriptionText</div>
        </div>
        <div className={styles.nftDetails}>
          Details
          <div className={styles.detailsCreation}>
            <div className={styles.detailsOwnedBy}>detailsOwnedBy</div>
            <div className={styles.detailsFounded}>detailsFounded</div>
          </div>
          <div className={styles.detailsStat}>detailsStat</div>
          <div className={styles.detailsLinks}>
            <div className={styles.etherscanLink}>etherscanLink</div>
            <div className={styles.metadataLink}>metadataLink</div>
          </div>
          <div className={styles.detailsHistory}>detailsHistory</div>
        </div>
      </div>
    </div>
  );
}
