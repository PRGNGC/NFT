import styles from "./NftItemPage.module.scss";
import type { NftItem } from "@/shared/types/types";
import { SmallNftImage } from "@/widgets/NftPage/SmallNftImage";
import { BigNftImage } from "@/widgets/NftPage/BigNftImage";
import { SmallSpec } from "@/widgets/NftPage/SmallSpec";
import { BigSpec } from "@/widgets/NftPage/BigSpec";

interface NftPageType {
  nftItem: NftItem;
}

export function NftItemPage({ nftItem }: NftPageType) {
  return (
    <div className={styles.nftItemPage}>
      <div
        className={styles.nftItemPageContainer}
        style={
          nftItem.nftType === "planets" || nftItem.nftType === "bundles"
            ? { color: "black" }
            : {
                display: "flex",
                alignItems: "start",
                justifyContent: "space-between",
                columnGap: "100px",
              }
        }
      >
        {nftItem.nftType === "planets" || nftItem.nftType === "bundles" ? (
          <BigNftImage image={nftItem.nftImg} />
        ) : (
          <SmallNftImage image={nftItem.nftImg} />
        )}
        <div
          className={styles.nftItemPageInfo}
          style={
            nftItem.nftType === "planets" || nftItem.nftType === "bundles"
              ? { margin: "0 auto", maxWidth: "1200px" }
              : { flexGrow: "1" }
            // : { width: "auto" }
          }
        >
          {nftItem.nftType === "planets" || nftItem.nftType === "bundles" ? (
            <BigSpec nftItem={nftItem} />
          ) : (
            <SmallSpec nftInfo={nftItem} />
          )}
        </div>
      </div>
    </div>
  );
}
