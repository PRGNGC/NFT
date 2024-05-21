import type { INft } from "@/entities/nft/api/types";
import styles from "./HistorySection.module.scss";
import Image from "next/image";
import Link from "next/link";

interface IHistorySection {
  nft: INft;
}

export function HistorySection({ nft }: IHistorySection) {
  return (
    <div className={styles.historySection}>
      {nft.history.map((historyItem) => {
        return (
          <>
            <div className={styles.historyItem}>
              <div className={styles.historyUser}>
                <Image
                  src="/images/astronaut.png"
                  width={48}
                  height={48}
                  alt="img"
                />
                <div className={styles.userCredentials}>
                  <p className={styles.transactionType}>
                    {historyItem.actionType} by
                    <span
                      className={styles.userTag}
                    >{` ${historyItem.user}`}</span>
                  </p>
                  <p className={styles.transactionTime}>
                    {`${historyItem.date} at `}
                    {`${historyItem.time}`}
                  </p>
                </div>
              </div>
              <div className={styles.transactionPrice}>
                {`${historyItem.priceETH} ETH `}

                <Link href="/">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.20496 3C2.44359 3.19142 1.33301 4.61876 1.33301 8.82183C1.33301 13.3678 2.6322 14.6667 7.17935 14.6667C11.3622 14.6667 12.7966 13.5676 12.9997 10.1207"
                      stroke="#7F8596"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.83301 7.16732L14.6663 1.33398"
                      stroke="#7F8596"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.66602 1.33398H14.666V6.33398"
                      stroke="#7F8596"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <hr />
          </>
        );
      })}
    </div>
  );
}
