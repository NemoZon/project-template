import classes from './index.module.css';

export interface ITitleProps {
  title: string;
  subtitle: string;
}

export function Title({ title, subtitle }: ITitleProps) {
  return (
    <div>
      <h1 className={classes.title}>{title}</h1>
      <h2 className={classes.subtitle}>{subtitle}</h2>
    </div>
  );
}
