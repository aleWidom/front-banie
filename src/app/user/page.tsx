import Link from 'next/link';
import { Button } from '@/components/atoms';
import styles from './user.module.scss'

export default function User() {

  return (
    <div className={styles.container}>
      <Link href="/login">
        <Button
          text="Iniciar Sesión"
          size='large'
        />
      </Link>
      <Link href="/register">
        <Button
          text="Registrarme"
          size='large'
        />
      </Link>
    </div>
  );
}
