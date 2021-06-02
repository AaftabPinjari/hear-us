import Head from 'next/head';
import { format, parseISO } from 'date-fns';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';

import { getAllPosts } from '../../lib/data';

export default function BlogPage({ title, date, content }) {
  const hydratedContent = hydrate(content);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="text-gray-600 body-font bg-[#E5E7EB]">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-gray-600 text-md">
            {format(parseISO(date), 'MMMM do, uuu')}
          </div>
          <div className="text-center ">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#2C5282]">{title}</h1>
            <div className="prose bg-[#E5E7EB]">{hydratedContent}</div>
          </div>
        </div>
      </section>
    </div>
  );
}

{/*<div className="text-gray-600 text-md">
            {format(parseISO(date), 'MMMM do, uuu')}
          </div> */}
export async function getStaticProps(context) {
  const { params } = context;
  const allPosts = getAllPosts();
  const { data, content } = allPosts.find((item) => item.slug === params.slug);
  const mdxSource = await renderToString(content);

  return {
    props: {
      ...data,
      date: data.date.toISOString(),
      content: mdxSource,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: getAllPosts().map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}