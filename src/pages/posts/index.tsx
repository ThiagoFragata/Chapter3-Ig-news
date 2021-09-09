import React from "react";

import Head from "next/head";
import { GetStaticProps } from "next";

import Prismic from "@prismicio/client";
import { getPrismicClient } from "../../services/prismic";

import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ig-news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.post}>
          <a href="">
            <time>07 de setembro de 2021</time>
            <strong>Creating posts</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat a
              est quis excepturi architecto commodi numquam iure, incidunt quo
              natus quos veniam ut magnam at cupiditate ipsum nostrum nulla
              nisi?
            </p>
          </a>
          <a href="">
            <time>07 de setembro de 2021</time>
            <strong>Creating posts</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat a
              est quis excepturi architecto commodi numquam iure, incidunt quo
              natus quos veniam ut magnam at cupiditate ipsum nostrum nulla
              nisi?
            </p>
          </a>
          <a href="">
            <time>07 de setembro de 2021</time>
            <strong>Creating posts</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat a
              est quis excepturi architecto commodi numquam iure, incidunt quo
              natus quos veniam ut magnam at cupiditate ipsum nostrum nulla
              nisi?
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "pos")],
    {
      fetch: ["title", "content"],
      pageSize: 100,
    }
  );

  console.log(response)

  return {
    props: {},
  };
};
