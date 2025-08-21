import React from 'react';
import { Badge, Space } from 'antd';

import styles from "./badge.module.scss"

type SharedBadgeType = {
  color?: string;
  text?: string;
  backgroundColor?: any;
  className?: string;
}
const SharedBadge = ({
    color = "#fff",
    text = "Workshop",
    backgroundColor= "#52c41a",
    className
}: SharedBadgeType) => {
  return (
    <div className={`${styles.badgeContainer} ${className}`}>
      <Space>
        <Badge
          count={text}
          style={{ 
            backgroundColor: `${backgroundColor}`, 
            color: `${color}` 
          }}
        />
      </Space>
    </div>
  );
};

export default SharedBadge;