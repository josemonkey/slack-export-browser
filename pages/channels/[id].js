import Layout from '../../components/layout'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

import {
  getAllChannels,
  getAllChannelIds,
  getChannelData,
} from '../../lib/channels'

export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const channelData = await getChannelData(params.id)
  return {
    props: {
      channelData,
    },
  }
}

export async function getStaticPaths() {
  const paths = getAllChannelIds()
  return {
    paths,
    fallback: false,
  }
}

export default function Channel({ channelData }) {
  return (
    <Layout>
      <Head>
        <title>{channelData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{channelData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={channelData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: channelData.contentHtml }} />
      </article>
    </Layout>
  )
}
