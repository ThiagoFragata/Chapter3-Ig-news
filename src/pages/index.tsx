import { GetServerSideProps } from "next";

import { SubscribeButton } from "../components/SubcribeButton";
import { stripe } from "../services/stripe";
import styles from "../styles/Home.module.scss";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏🏻 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.{" "}
          </h1>
          <p>
            Get access to all the publications <br />{" "}
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img src="./images/avatar.svg" alt="Girls coding" />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve("price_1JMDQcDZZ5M7eb3rnU3Ccknv");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-Us", {
      currency: "USD",
      style: "currency",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
  };
};
