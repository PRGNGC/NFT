"use client";
import styles from "./SmallSpec.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { NftItem } from "@/shared/types/types";

interface SmallSpecProps {
  nftInfo: NftItem;
}

export function SmallSpec({ nftInfo }: SmallSpecProps) {
  const [currentDesc, setCurrentDesc] = useState<string>("Description");

  return (
    <div className={styles.smallSpecBlock}>
      <div className={styles.smallSpecCommonInfo}>
        <div className={styles.commonInfoNameId}>
          <span className={styles.commonInfoId}>#{nftInfo.nftId}</span>
          <span className={styles.commonInfoId}>#{nftInfo.nftId}</span>
        </div>
        <div className={styles.commonInfoPricesName}>
          <h1 className={styles.commonInfoName}>{nftInfo.nftName}</h1>
          <div className={styles.commonInfoPrices}>
            <span className={styles.ethPrice}>{nftInfo.nftEthPrice}</span>
            <span className={styles.dollarPrice}>dollarPrice</span>
          </div>
        </div>
      </div>
      <div className={styles.smallSpecLinks}>
        <button className={styles.smallSpecPurchaseButton}>Purchase now</button>
        <Link className={styles.smallSpecLink} href="/">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 3C5 3 3 5 3 12C3 19 5 21 12 21C17.2937 21 19.7279 19.8562 20.6001 16.5"
              stroke="#494E5B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 14C8 12 9 9 13.5 9C19.3726 9 19.9952 9 19.9952 9"
              stroke="#494E5B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17 5L21 9L17 13"
              stroke="#494E5B"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
      </div>
      <div className={styles.descMenu}>
        <div className={styles.descCategories}>
          <p
            className={
              currentDesc === "Description"
                ? styles.activeCategory
                : styles.descCategory
            }
            onClick={() => setCurrentDesc("Description")}
          >
            Description
          </p>
          <p
            className={
              currentDesc === "Details"
                ? styles.activeCategory
                : styles.descCategory
            }
            onClick={() => setCurrentDesc("Details")}
          >
            Details
          </p>
          <p
            className={
              currentDesc === "History"
                ? styles.activeCategory
                : styles.descCategory
            }
            onClick={() => setCurrentDesc("History")}
          >
            History
          </p>
        </div>
        <div className={styles.categoriesInfoBlock}>
          {currentDesc === "Description" && <div></div>}
          {currentDesc === "Details" && (
            <p className={styles.categoryInfo}>Details info</p>
          )}
          {currentDesc === "History" && (
            <p className={styles.categoryInfo}>History info</p>
          )}
        </div>
      </div>
    </div>
  );
}
