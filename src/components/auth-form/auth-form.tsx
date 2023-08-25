import React from 'react';
import { DefaultButton } from '@/shared/buttons/default-btn/default-btn';
import styles from './auth-form.module.scss';

interface IAuthFormProps extends React.HTMLAttributes<HTMLFormElement> {
  children: React.ReactElement;
  heading: string;
  buttonLabel: string;
  isLoading?: boolean;
}

export const AuthForm = ({
  children,
  heading,
  buttonLabel,
  isLoading = false,
  onSubmit,
}: IAuthFormProps) => (
  <div className={styles.wrapper}>
    <h1>{heading}</h1>
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
      <DefaultButton label={buttonLabel} isLoading={isLoading} />
    </form>
  </div>
);
