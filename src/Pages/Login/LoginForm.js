import styles from "./Login.module.css";
import ContainerForm from "./Form/ContainerForm";

export default function Login() {
  return (
    <div className={styles.container}>
      <ContainerForm />
    </div>
  );
}
