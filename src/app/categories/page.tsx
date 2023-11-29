import { MainCategories } from "@/components/molecules";
import styles from "./Categories.module.scss";

export default function CategoriesPage() {
  return (
    // Son necesarios tener dos divs? O se puede simplificar en 1?? Asi evitamos tener tantos divs anidados.
    <div className={styles.container}>
      <div className={styles.content}>
        <MainCategories />
      </div>
    </div>
  );
}
