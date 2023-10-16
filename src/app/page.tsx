import { Button } from "@/components/atoms";
import { InputLabel } from "@/components/molecules";
import { OptionsInputs } from "@/components/molecules/OptionsInputs";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <OptionsInputs />
      <div className={styles.containerForm}>
        <InputLabel titleLabel={"Email"} />
        <InputLabel titleLabel={"Password"} />
        <Button />
      </div>
    </div>
  );
}
