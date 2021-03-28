import { GetServerSideProps, GetStaticProps } from 'next';
import Head from 'next/Head';
import { SubscribeButton } from '../components/SubscribeButton';
import styles from './home.module.scss';
import { stripe } from '../services/stripe';

// Client-side
// Server-side
// Static Site Generation

// Post do blog
// SSG ( Static Site Generation)

// Comentários
// Client-side

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }) {
  return (
    <>
      <Head>
        <title>Home - ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month.</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const price = await stripe.prices.retrieve('stripe_price_id', {
//     expand: ['product']
//   });

//   const product = {
//     priceId: price.id,
//     amount: new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD',
//     }).format(price.unit_amount / 100),
//   };

//   return {
//     props: {
//       product
//     }
//   }
// }

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1IZodeDca4tT3dGukhIGmxZC', {
    expand: ['product']
  });

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24, // 24 horas
  }
}
