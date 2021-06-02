import Head from 'next/head';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { getAllPosts } from '../lib/data';

export default function Blog({ posts }) {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section class="text-gray-600 body-font overflow-hidden bg-[#E5E7EB]">
        <div class="container px-5 py-24 mx-auto">
          <div class="-my-8 divide-y-2 divide-gray-100">
            {posts.map((item) => (


              <BlogListItem key={item.slug} {...item} />

            ))
            }
          </div>
        </div>



      </section >
    </div >
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts.map(({ data, content, slug }) => ({
        ...data,
        date: data.date.toISOString(),
        content,
        slug,
      })),
    },
  };
}

function BlogListItem({ slug, title, date, content, desc }) {
  return (



    <div class="py-8 flex flex-wrap md:flex-nowrap">
      <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span class="font-semibold title-font text-[#2C5282]">The Post</span>
        <span class="mt-1 text-gray-500 text-sm">{format(parseISO(date), 'MMMM do, uuu')}</span>
      </div>
      <div class="md:flex-grow">
        <Link href={`/blog/${slug}`}><a class="text-2xl font-medium text-[#2C5282] title-font mb-2">{title}</a></Link>
        <p class="leading-relaxed">{desc}</p>
      </div>
    </div>




  );
}

{/* */ }