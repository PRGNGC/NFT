export interface NftItem {
  nftImg: string;
  nftId: string;
  nftEthPrice: number;
  nftName: string;
  nftTrait?: string;
  nftCoordinates?: string;
  nftLevelRequirement?: number;
  nftPossibleUsers?: string[];
  nftType?: string;
}
