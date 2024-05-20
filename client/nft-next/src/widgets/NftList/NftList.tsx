"use client";
import { ItemCard } from "@/entities/nft/ui";
import styles from "./NftList.module.scss";
import { useSearchParams, useParams, notFound } from "next/navigation";
import { loadNfts } from "@/entities/nft/queries";
import { InfiniteData, UseInfiniteQueryResult } from "@tanstack/react-query";

interface INftList {
  fetchFunc(
    category: string,
    searchQuery: string
  ): UseInfiniteQueryResult<InfiniteData<any, unknown>, Error>;
}

export function NftList({ fetchFunc }: INftList) {
  const searchParams = useSearchParams();
  const searchQuery = searchParams?.get("search") as string;
  const category = useParams()?.category as string;

  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    status,
  } = fetchFunc(category, searchQuery);
  // } = loadNfts(category, searchQuery);

  if (isLoading) return <p>Loading...</p>;

  if (status === "error") notFound();

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