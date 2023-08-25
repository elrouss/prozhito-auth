import { AuthForm } from '../auth-form';
import { Input } from '@/shared/input/input';
import styles from './sign-in-form.module.scss';

export const SignInForm = () => (
  <AuthForm heading="Авторизация" buttonLabel="Войти">
    <div className={styles.inputs}>
      <Input type="email" label="Email" />
      <Input type="password" label="Пароль" />
    </div>
  </AuthForm>
);
