import Head from 'next/head'
import Layout, { siteTitle, siteDesc } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

import { getAllChannels, getRealChannels } from '../lib/channels'

/* Get the list of channels so we can present some navigation. */
export async function getStaticProps() {
  const channelList = getAllChannels()
  return {
    props: {
      channelList,
    },
  }
}

/* The home page */
export default function Home({ channelList }) {
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
          {channelList.map(({ id, name, purpose }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/channels/${name}`}>#{name}</Link> - {purpose?.value}
              <br />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
