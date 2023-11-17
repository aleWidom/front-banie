import { MainHome } from "@/components/molecules";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <MainHome />
      </div>
    </div>
  );
}
