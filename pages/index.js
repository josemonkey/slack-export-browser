import Head from 'next/head'
import Layout, { siteTitle, siteDesc } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

import { getAllChannels } from '../lib/channels'

export async function getStaticProps() {
  const allChannelIds = getAllChannels()
  return {
    props: {
      allChannelIds,
    },
  }
}
//
export default function Home({ allChannelIds }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{siteDesc}</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Channels</h2>
        <ul className={utilStyles.list}>
          {allChannelIds.map(({ id, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/channels/${id}`}>{title}</Link>
              <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
