import { Header } from '@/shared/header/header';
import { HeadingH1Default } from '@/shared/headings/heading-h1-default/ heading-h1-default';
import { DefaultButton } from '@/shared/buttons/default-btn/default-btn';
import styles from './index.module.scss';

const ProfilePage = () => (
  <>
    <Header />
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <HeadingH1Default label="Привет, TEST!" />
        <DefaultButton label="Выход" />
      </div>
    </main>
  </>
);

export default ProfilePage;
