import { Button } from "antd";
import styles from "./button.module.scss"

export default function SharedButton({
    type = "primary",
    color= "",
    text = "text",
    children,
    className,
    onClick,
    disabled = false
}: {
  type: "primary" | "text" | "link" | "dashed" | "default",
  text?: string
  children?: any
  className?: string
  onClick?: any;
  color?: "success" | string,
  disabled?:boolean
}) {
  return (
    <div className={styles.buttonContainer}>
      <Button 
        onClick={onClick} 
        disabled={disabled}
        className={`${className} ${color} ${type}`} 
        type={type}
      >
        {children || text}
      </Button>
    </div>
  );
}
