import React from 'react';
import styles from './auth-form.module.scss';

type TAuthFormProps = {
  children: React.ReactElement;
  heading: string;
};

export const AuthForm = ({ children, heading }: TAuthFormProps) => (
  <div className={styles.wrapper}>
    <h1>{heading}</h1>
    <form className={styles.form}>{children}</form>
  </div>
);
