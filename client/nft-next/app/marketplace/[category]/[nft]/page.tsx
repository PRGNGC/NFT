import { getNft } from "@/shared/api/getNft";
import { NftItemPage } from "@/pages/NftIItemPage";

interface ParamsType {
  category: string;
  nft: string;
}

interface NftPageType {
  params: ParamsType;
}

export default async function NftPage({ params }: NftPageType) {
  const nftData = await getNft(params.category, params.nft);
  console.log(nftData);
  return <NftItemPage nftItem={nftData} />;
}
