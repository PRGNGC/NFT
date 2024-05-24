import styles from "./Profile.module.scss";
import { NftNavigation } from "@/widgets/NftNavigation";
import { NftList } from "@/widgets/NftList";
import { loadNfts } from "@/entities/myNft/queries";

interface IProfile {}

export function Profile({}: IProfile) {
  return (
    <div style={{ backgroundColor: "white" }} className="profile">
      <NftNavigation />
      <NftList fetchFunc={loadNfts} />
    </div>
  );
}
