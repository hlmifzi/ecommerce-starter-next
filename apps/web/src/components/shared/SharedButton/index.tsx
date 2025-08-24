"use client"

import Button from "@mui/material/Button";
import styles from "./button.module.scss"

type ButtonType = "text" | "primary" | "secondary" | "tertiary" | "Quaternary"
type variantType = "text" | "contained" | "outlined"
type ButtonHtmlType = "button" | "submit" | "reset" // Tambahkan type untuk HTML button type

type SharedButtonType = {
  text?: string
  children?: any
  onClick?: any;
  disabled?: boolean
  type?: ButtonType
  className?: string
  buttonType?: ButtonHtmlType // Ganti menjadi ButtonHtmlType
}

export default function SharedButton({
  children, 
  disabled = false, 
  type = "primary",
  text = "text",
  className,
  onClick,
  buttonType = "button" // Default value "button"
}: SharedButtonType) {

  const getVariant = (type: ButtonType): variantType => {
    switch (type) {
      case "text":
        return "text"
      case "primary":
        return "contained"
      case "secondary":
        return "contained"
      case "tertiary":
        return "outlined"
      case "Quaternary":
        return "outlined"
      default:
        return "contained" // Tambahkan default case
    }
  }

  return (
    <div className={styles.buttonContainer}>
      <Button 
        onClick={onClick} 
        className={`shared-button-${type} ${className}`} 
        variant={getVariant(type)} 
        disabled={disabled}
        type={buttonType} // Material UI Button menerima type prop untuk HTML button type
      >
        {children || text}
      </Button>
    </div>
  );
}