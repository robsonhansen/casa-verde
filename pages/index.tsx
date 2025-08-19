import Head from 'next/head';
import styles from '../styles/Home.module.css';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const products: Product[] = [
  { id: 1, name: 'Ajuga reptans', price: 'R$ 20,00', image: '/img/produto-01.png' },
  { id: 2, name: 'Cordyline fruticosa', price: 'R$ 20,00', image: '/img/produto-02.png' },
  { id: 3, name: 'Crassula ovata', price: 'R$ 20,00', image: '/img/produto-03.png' },
  { id: 4, name: 'Cyperus rotundus', price: 'R$ 20,00', image: '/img/produto-04.png' },
  { id: 5, name: 'Delairea odorata', price: 'R$ 20,00', image: '/img/produto-05.png' },
  { id: 6, name: 'Datura metel', price: 'R$ 20,00', image: '/img/produto-06.png' }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Casa Verde</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Elsie+Swash+Caps:wght@900&family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className={styles.header}>
        <img src="/img/logo.svg" alt="Logo da Casa Verde" className={styles.logo} />
        <a href="/login" className={styles.loginLink}>Login</a>
      </header>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Sua casa com as <span className={styles.highlight}>melhores plantas</span>
            </h1>
            <p className={styles.text}>
              Encontre aqui uma vasta seleção de plantas para decorar a sua casa e tornar o seu dia a dia mais feliz.
            </p>
            <form className={styles.newsletterForm}>
              <input type="email" placeholder="Insira seu e-mail" className={styles.input} />
              <button className={styles.button}>Assinar newsletter</button>
            </form>
          </div>
          <div className={styles.heroImage}>
            <img src="/img/planta-chamada.png" alt="Planta" />
          </div>
        </section>
        <section className={styles.products}>
          <h2>
            Conheça nossos <span className={styles.highlight}>produtos</span>
          </h2>
          <ul className={styles.productList}>
            {products.map((product) => (
              <li key={product.id} className={styles.product}>
                <img src={product.image} alt={product.name} className={styles.productImage} />
                <h3 className={styles.productTitle}>{product.name}</h3>
                <p className={styles.price}>{product.price}</p>
                <button className={styles.buyButton}>Comprar</button>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className={styles.footer}>
        <img src="/img/logo.svg" alt="Logo da Casa Verde" className={styles.logo} />
        <p>© 2024 Casa Verde</p>
      </footer>
    </>
  );
}
