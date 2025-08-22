import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import styles from "./sharedTabs.module.scss"

type SharedTabsType = {
    value: number;
    handleChange:any;
    tabsMenu: {
        label: string
    }[];
}

export default function SharedTabs({
    value,
    handleChange,
    tabsMenu
}:SharedTabsType) {
  
  return (
    <div className={styles.tabsContainer}>
      <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
        {tabsMenu?.map((tab: any, index: number) => {
          return (
            <Tab key={index} label={tab.label} />
          )
        })}
      </Tabs>
    </div>
  );
}
