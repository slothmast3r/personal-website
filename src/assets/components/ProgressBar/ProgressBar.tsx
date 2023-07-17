import React, { useState, useEffect } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import styles from './ProgressBar.module.scss';

type ProgressBarProps = {
  title: string;
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ title, percentage }) => {
  const [visibility, setVisibility] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (visibility) {
      setWidth(percentage);
    } else {
      setWidth(0);
    }
  }, [visibility, percentage]);

  return (
    <VisibilitySensor onChange={(isVisible: boolean | ((prevState: boolean) => boolean)) => setVisibility(isVisible)}>
      <div>
        <span>{title}</span>
        <div className={styles.container}>
          <div className={styles.filler} style={{ width: `${width}%` }}>
            <span className={styles.label}>{`${width}%`}</span>
          </div>
        </div>
      </div>
    </VisibilitySensor>
  );
};

export default ProgressBar;
