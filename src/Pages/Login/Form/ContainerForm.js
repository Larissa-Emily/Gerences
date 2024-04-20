import styles from "./ContainerForm.module.css";

import Title from "./Title";
import Form from "./Forms";
export default function ContainerForm() {
  return (
    <div className={styles.container}>
      <Title />
      <Form />
    </div>
  );
}
