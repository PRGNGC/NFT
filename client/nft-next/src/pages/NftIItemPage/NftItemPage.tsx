import styles from "./NftItemPage.module.scss";
import { BigNftImage } from "@/widgets/NftPage/BigNftImage";
import { SmallSpec } from "@/widgets/NftPage/SmallSpec";
import { BigSpec } from "@/widgets/NftPage/BigSpec";
import type { INft } from "@/entities/nft/api/types";
import { SimilarNftsSlider } from "@/widgets/SimilarNftsSlider";

interface NftPageType {
  nftItem: INft;
}

export function NftItemPage({ nftItem }: NftPageType) {
  return (
    <div className={styles.nftItemPage}>
      <div
        className={styles.nftItemPageContainer}
        style={
          nftItem.nftType === "planets" || nftItem.nftType === "bundles"
            ? { flexDirection: "column" }
            : { flexDirection: "row" }
        }
      >
        <BigNftImage image={nftItem.nftImg} />

        {nftItem.nftType === "planets" || nftItem.nftType === "bundles" ? (
          <BigSpec nftItem={nftItem} />
        ) : (
          <SmallSpec nftInfo={nftItem} />
        )}
      </div>
      <div className={styles.similarNftsSlider}>
        <SimilarNftsSlider nfts={nftItem.similarNfts} />
      </div>
    </div>
  );
}
