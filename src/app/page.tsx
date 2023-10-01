import { Button } from "@/components/atoms";
import { InputGroup } from "@/components/molecules";
import styles from "./page.module.scss";
import { OptionsInputs } from "@/components/molecules/OptionsInputs";

export default function Home() {
  return (
    <>
      <OptionsInputs />
      <div className={styles.container}>
        <div className={styles.containerForm}>
        <InputGroup />
        <Button />
        </div>
      </div>
    </>
  );
}
