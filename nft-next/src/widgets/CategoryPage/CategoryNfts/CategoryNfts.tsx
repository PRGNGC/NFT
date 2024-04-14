"use client";
import { ItemCard } from "@/entities/ItemCard";
import styles from "./CategoryNfts.module.scss";
import type { NftItem } from "@/shared/types/types";
import { useEffect, useState } from "react";
import { getCategoryNfts } from "../api";
import { useQuery } from "@tanstack/react-query";

export function CategoryNfts({
  category,
  amountOfItems,
}: {
  category: string;
  amountOfItems: number;
}) {
  const [visibleItems, setVisibleItems] = useState<number>(9);
  const { isLoading, isError, data, error } = useQuery({
    queryKey: [category, category, visibleItems],
    queryFn: () => getCategoryNfts(category, visibleItems),
  });

  //   const [nfts, setNfts] = useState<NftItem[]>([]);

  //   useEffect(() => {
  //     getCategoryNfts(category, visibleItems).then((data) => {
  //       setNfts(data);
  //     });
  //   }, [visibleItems]);

  return (
    <div className={styles.nftItems}>
      <div className={styles.nftItemsContainer}>
        {data?.map((nft: NftItem) => {
          return <ItemCard item={nft} />;
        })}
      </div>
      <button
        className={
          visibleItems >= amountOfItems
            ? styles.disabledLoadMore
            : styles.activeLoadMore
        }
        onClick={() => setVisibleItems((prev) => prev + 3)}
      >
        Load more
      </button>
    </div>
  );
}
