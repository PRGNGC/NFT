"use client";
import { useEffect, useState } from "react";
import styles from "./ItemCard.module.scss";
import Image from "next/image";
import type { NftItem } from "@/shared/types/types";
import { getEthPrice } from "@/shared/api/getEthPrice";
import { archivo } from "@/app/fonts";

interface ItemCardProps {
  item: NftItem;
}

export function ItemCard({ item }: ItemCardProps) {
  const [data, setData] = useState<{ USD: number } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getEthPrice().then((data) => {
      setData(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className={styles.itemCardBlock}>
      <div className={styles.itemCardImgBlock}>
        {item.nftTrait && (
          <div className={styles.itemTrait}>{item.nftTrait}</div>
        )}
        <Image src={item.nftImg} alt="nft" width={308} height={308} />
      </div>
      <div className={styles.commonInfo}>
        <div className={styles.nftIdEthPrice}>
          <span className={styles.nftId}>#{item.nftId}</span>
          <span className={styles.nftEthPrice}>{item.nftEthPrice} ETH</span>
        </div>
        <div className={styles.nftNameDollarPrice}>
          <p className={`${styles.nftName} ${archivo.className}`}>
            {item.nftName} {item.nftId}
          </p>
          <span className={styles.nftDollarPrice}>
            {loading && <p>Loading...</p>}
            {data?.USD !== undefined
              ? `$${(data.USD * item.nftEthPrice).toFixed(2)}`
              : null}
          </span>
        </div>
        <hr />
        <div className={styles.nftCoordinates}>
          <Image
            src="/icons/coordinates-mark.svg"
            alt="mark"
            width={13}
            height={16}
          />
          {item.nftCoordinates}
        </div>
      </div>
    </div>
  );
}
