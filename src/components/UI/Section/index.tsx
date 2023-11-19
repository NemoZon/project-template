import React from 'react';
import classes from './index.module.css';

export interface ISectionProps {
  children: string | JSX.Element;
  className?: string;
  onMouseEnter?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const Section = ({
  children,
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  onClick = () => {},
  className = '',
}: ISectionProps) => {
  return (
    <div
      className={classes.container}
      onMouseLeave={(e) => onMouseLeave(e)}
      onMouseEnter={(e) => onMouseEnter(e)}
      onClick={(e) => onClick(e)}
    >
      <div className={classes.border} />
      <div className={`${classes.box} ${className}`}>
        <div className={classes.main_content}>{children}</div>
      </div>
    </div>
  );
};
