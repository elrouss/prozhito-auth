import { useSession, signOut } from 'next-auth/react';
import { Header } from '@/shared/header/header';
import { HeadingH1Default } from '@/shared/headings/heading-h1-default/ heading-h1-default';
import { DefaultButton } from '@/shared/buttons/default-btn/default-btn';
import styles from './index.module.scss';

const ProfilePage = () => {
  const { data } = useSession();

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <HeadingH1Default label={`Привет, ${data?.user!.name}!`} />
          <DefaultButton label="Выход" onClick={() => signOut()} />
        </div>
      </main>
    </>
  );
};

export default ProfilePage;
