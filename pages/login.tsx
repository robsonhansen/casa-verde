import Head from 'next/head';
import { FormEvent } from 'react';
import styles from '../styles/Login.module.css';

export default function Login() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Login de teste');
  };

  return (
    <>
      <Head>
        <title>Login | Casa Verde</title>
      </Head>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1>Login</h1>
          <input type="email" placeholder="E-mail" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </>
  );
}
