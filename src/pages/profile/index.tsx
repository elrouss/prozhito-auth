import { DefaultButton } from '@/shared/buttons/default-btn/default-btn';
import styles from './index.module.scss';

const ProfilePage = () => (
  <main className={styles.main}>
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Привет, TEST!</h1>
      <DefaultButton label="Выход" />
    </div>
  </main>
);

export default ProfilePage;
