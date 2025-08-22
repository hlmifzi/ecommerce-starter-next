"use client"

import Button from "@mui/material/Button";
import styles from "./button.module.scss"


type ButtonType =  "text" | "primary" | "secondary" | "tertiary" | "Quaternary"
type variantType =  "text" | "contained" | "outlined"
type SharedButtonType = {
  text?: string
  children?: any
  onClick?: any;
  disabled?: boolean
  type?: ButtonType
  className?: string
  onclick?: any
}

export default function SharedButton({
  children, 
  disabled = false, 
  type = "primary",
  text = "text",
  className,
  onClick
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
    }
  }

  return (
    <div className={styles.buttonContainer}>
      <Button 
        onClick={onClick} 
        className={`shared-button-${type} ${className}`} 
        variant={getVariant(type)} 
        disabled={disabled}
      >
        {children || text}
      </Button>
    </div>
  );
}
