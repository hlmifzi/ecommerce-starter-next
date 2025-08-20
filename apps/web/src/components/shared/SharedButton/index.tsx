import { Button } from "antd";
import styles from "./button.module.scss"

export default function SharedButton({
    type = "primary",
    text = "text",
    children,
    className,
    onClick,
    disabled
}: {
  type: "primary" | "text" | "link" | "dashed" | "default",
  text?: string
  children?: any
  className?: string
  onClick?: any;
  disabled?:boolean
}) {
  return (
    <div className={styles.buttonContainer}>
      <Button 
        onClick={onClick} 
        className={`${className} 
        ${type}`} 
        type={type}>
          {children || text}
      </Button>
    </div>
  );
}
