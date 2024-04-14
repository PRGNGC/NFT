import { CategoryNfts } from "@/widgets/CategoryPage/CategoryNfts";
import { getCategoryNfts } from "@/widgets/CategoryPage/api";

interface ParamsType {
  category: string;
}

interface CategoryPageType {
  params: ParamsType;
}

export default async function CategoryPage({ params }: CategoryPageType) {
  const charactersNfts = await getCategoryNfts(params.category);

  return (
    <>
      <CategoryNfts
        category={params.category}
        amountOfItems={charactersNfts.length}
      />
      {/* <button
      // className={
      //   categoryItems.visibleItems === categoryItems.allItems
      //     ? styles.disabledLoadMore
      //     : styles.activeLoadMore
      // }
      // onClick={() =>
      //   setCategoryItems((prev) => {
      //     return {
      //       visibleItems:
      //         prev.visibleItems + 3 >= prev.allItems
      //           ? prev.allItems
      //           : prev.visibleItems + 3,
      //       allItems: prev.allItems,
      //     };
      //   })
      // }
      >
        Load more
      </button> */}
    </>
  );
}
