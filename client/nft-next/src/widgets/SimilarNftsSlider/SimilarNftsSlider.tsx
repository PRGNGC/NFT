"use client";
import styles from "./SimilarNftsSlider.module.scss";
import Link from "next/link";
import { RightArrowSvgImg } from "@/shared/ui/icons/RightArrowSvgImg";
import { INft } from "@/entities/nft/api/types";
import { loadNftsForSlider } from "@/entities/nft/queries";
import { useParams } from "next/navigation";
// Slider
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "./slider.scss";
// import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";
// import { ItemCard } from "@/entities/nft/ui";
import { register } from "swiper/element/bundle";

interface ISimilarNftsSlider {
  nfts: string[];
}

register();

export function SimilarNftsSlider({ nfts }: ISimilarNftsSlider) {
  const category = useParams()?.category as string;
  const { isLoading, isError, error, data } = loadNftsForSlider(category, nfts);

  if (isLoading) {
    <div>Loading..</div>;
  }
  if (isError) {
    <div>{error.message}</div>;
  }

  return (
    <div className={styles.similarNftsBlock}>
      <div className={styles.similarNftsHeader}>
        <h3 className={styles.similarNftsTitle}>You may also like</h3>
        <Link className={styles.similarNftsLink} href="/marketplace">
          <p>View all nfts</p>
          <RightArrowSvgImg />
        </Link>
      </div>
      <div className={styles.similarNftsSlider}>
        {/* <swiper-container>
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
        </swiper-container> */}
        {/* <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className={styles.sliderBlock}
        >
          {data?.map((item: INft) => {
            return (
              <SwiperSlide>
                <ItemCard item={item} category={category} />
              </SwiperSlide>
            );
          })}
        
        </Swiper> */}
      </div>
    </div>
  );
}
