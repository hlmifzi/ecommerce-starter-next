import { Button } from "antd";
import styles from "./button.module.scss"

export default function SharedButton({
    type = "primary",
    text = "text",
    children
}: {
  type: "primary" | "text" | "link" | "dashed" | "default",
  text?: string
  children?: any
}) {
  return (
    <div className={styles.buttonContainer}>
        <Button className={type} type={type}>{children || text}</Button>
    </div>
  );
}
