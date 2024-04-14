"use client";
import { useState, useEffect } from "react";
import styles from "./NftBlock.module.scss";
import { NftSearch } from "@/features/NftSearch";
import Image from "next/image";
import { ItemCard } from "@/entities/ItemCard";
import type { NftItem } from "@/shared/types/types";
import { getAllNft } from "./api";

export function NftBlock() {
  const [currentCategory, setCurrentCategory] = useState<string>("characters");
  const [nfts, setNfts] = useState<NftItem[]>([]);
  const [categoryItems, setCategoryItems] = useState<{
    visibleItems: number;
    allItems: number;
  }>({
    visibleItems: 9,
    allItems: 0,
  });

  useEffect(() => {
    getAllNft().then((data) => {
      setNfts(data);
      setCategoryItems((prev) => {
        return {
          visibleItems: prev.visibleItems,
          allItems: data.filter(
            (item: NftItem) => item.nftType === currentCategory
          ).length,
        };
      });
    });
  }, []);

  console.log(currentCategory);
  console.log(categoryItems.allItems, categoryItems.visibleItems);

  return (
    <div className={styles.nftBlock}>
      <div className={styles.nftBlockContainer}>
        <div className={styles.nftNavigation}>
          <nav className={styles.nftNavigationMenu}>
            <ul className={styles.nftNavigationList}>
              <li
                onClick={() => {
                  let nextCategory = "characters";
                  setCurrentCategory(nextCategory);
                  setCategoryItems({
                    visibleItems: 9,
                    allItems: nfts.filter(
                      (data) => data.nftType === nextCategory
                    ).length,
                  });
                }}
                className={
                  currentCategory === "characters"
                    ? styles.activeNavigationItem
                    : styles.nftNavigationItem
                }
              >
                <Image
                  src="/images/characters-icon.png"
                  alt="icon"
                  width={32}
                  height={32}
                />
                Characters
              </li>
              <li
                onClick={() => {
                  // setCurrentCategory("planets");
                  let nextCategory = "planets";
                  setCurrentCategory(nextCategory);
                  setCategoryItems({
                    visibleItems: 9,
                    allItems: nfts.filter(
                      (data) => data.nftType === nextCategory
                    ).length,
                  });
                }}
                className={
                  currentCategory === "planets"
                    ? styles.activeNavigationItem
                    : styles.nftNavigationItem
                }
              >
                <Image
                  src="/images/planets-icon.png"
                  alt="icon"
                  width={32}
                  height={32}
                />
                Planets
              </li>
              <li
                onClick={() => {
                  // setCurrentCategory("items");
                  let nextCategory = "items";
                  setCurrentCategory(nextCategory);
                  setCategoryItems({
                    visibleItems: 9,
                    allItems: nfts.filter(
                      (data) => data.nftType === nextCategory
                    ).length,
                  });
                }}
                className={
                  currentCategory === "items"
                    ? styles.activeNavigationItem
                    : styles.nftNavigationItem
                }
              >
                <Image
                  src="/images/items-icon.png"
                  alt="icon"
                  width={32}
                  height={32}
                />
                Items
              </li>
              <li
                onClick={() => {
                  // setCurrentCategory("bundles");
                  let nextCategory = "bundles";
                  setCurrentCategory(nextCategory);
                  setCategoryItems({
                    visibleItems: 9,
                    allItems: nfts.filter(
                      (data) => data.nftType === nextCategory
                    ).length,
                  });
                }}
                className={
                  currentCategory === "bundles"
                    ? styles.activeNavigationItem
                    : styles.nftNavigationItem
                }
              >
                <Image
                  src="/images/bundles-icon.png"
                  alt="icon"
                  width={32}
                  height={32}
                />
                Bundles
              </li>
            </ul>
          </nav>
          <NftSearch />
        </div>

        <div className={styles.nftItems}>
          <div className={styles.nftItemsContainer}>
            {nfts.map((nft, index) => {
              if (
                nft.nftType === currentCategory &&
                index <= categoryItems.visibleItems - 1
              ) {
                return <ItemCard item={nft} />;
              }
            })}
          </div>
          <button
            className={
              categoryItems.visibleItems === categoryItems.allItems
                ? styles.disabledLoadMore
                : styles.activeLoadMore
            }
            onClick={() =>
              setCategoryItems((prev) => {
                return {
                  visibleItems:
                    prev.visibleItems + 3 >= prev.allItems
                      ? prev.allItems
                      : prev.visibleItems + 3,
                  allItems: prev.allItems,
                };
              })
            }
          >
            Load more
          </button>
        </div>
      </div>
    </div>
  );
}
