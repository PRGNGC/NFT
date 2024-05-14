"use client";
import { ItemCard } from "@/entities/ItemCard";
import styles from "./NftList.module.scss";
import type { NftItem } from "@/shared/types/types";
import { useSearchParams, useParams } from "next/navigation";
import { loadNfts } from "@/entities/nft/queries";

export function NftList() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams?.get("search") as string;
  const category = useParams()?.category as string;

  const { data, isLoading, isError, error, fetchNextPage, hasNextPage } =
    loadNfts(category, searchQuery);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>{`${error}`}</p>;

  return (
    <div className={styles.nftItems}>
      <div className={styles.nftItemsContainer}>
        {data?.pages.map((page: { nfts: [] } | []) => {
          const path: [] = Array.isArray(page) ? page : page.nfts;
          return path.map((nft: any) => {
            return <ItemCard key={nft.id} category={category} item={nft} />;
          });
        })}
      </div>
      <button
        className={
          hasNextPage ? styles.activeLoadMore : styles.disabledLoadMore
        }
        onClick={() => {
          fetchNextPage();
        }}
      >
        Load more
      </button>
    </div>
  );
}
