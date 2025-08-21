import styles from "./card.module.scss"


const Card = ({ children, ...props }:any) => {
  return (
    <div className={styles.sharedCardContainer}>
        <div {...props}>
            {children}
        </div>
    </div>
  )
}

export default Card