import { MainHome } from "@/components/molecules";
import styles from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <MainHome />
      </div>
    </div>
  );
}
