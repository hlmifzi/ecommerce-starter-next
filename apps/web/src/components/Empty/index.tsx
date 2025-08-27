import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import styles from "./empty.module.scss";

type EmptyType = {
  icon?: any;
  text?: any;
  children?: any;
}

const Empty = ({
  icon = <AddShoppingCartIcon />,
  text = <p> Tidak ada pelatihan, <a>Beli pelatihan sekarang</a></p>,
  children
}:EmptyType) => {
  return (
    <section className={styles.emptySection}>
      {icon}
      {children || text}
    </section>
  )
}

export default Empty