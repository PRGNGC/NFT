import { PreviewBlock } from "@/widgets/MainPage/PreviewBlock";
import { CategoryToggler } from "@/widgets/CategoryPage/CategoryToggler";

interface ParamsType {
  category: string;
}

interface CategoryLayoutTypes {
  children: React.ReactNode;
  params: ParamsType;
}

export default function CategoryLayout({
  children,
  params,
}: CategoryLayoutTypes) {
  return (
    <>
      <PreviewBlock />
      <CategoryToggler category={params.category} />
      {children}
    </>
  );
}
