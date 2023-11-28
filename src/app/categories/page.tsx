import { MainCategories } from "@/components/molecules";
import styles from "./Categories.module.scss";

export default function CategoriesPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <MainCategories />
      </div>
    </div>
  );
}
