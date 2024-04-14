import styles from "./Main.module.scss";
import { PreviewBlock } from "@/widgets/MainPage/PreviewBlock";
import { NftBlock } from "@/widgets/MainPage/NftBlock";

export function Main() {
  return (
    <div>
      <PreviewBlock />
      <NftBlock />
    </div>
  );
}
