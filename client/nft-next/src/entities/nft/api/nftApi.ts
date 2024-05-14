import type { ICharacterNft, IPlanetNft, IItemNft, IBundleNft } from "./types";

export async function getNfts(
  { pageParam }: { pageParam: number },
  category: string,
  search?: string
): Promise<ICharacterNft | IPlanetNft | IItemNft | IBundleNft> {
  const url: string = search
    ? `http://localhost:4000/api/${category}?nextSearchIndex=${pageParam}&search=${search}`
    : `http://localhost:4000/api/${category}?page=${pageParam}`;

  const response = await fetch(url);
  return await response.json();
}
