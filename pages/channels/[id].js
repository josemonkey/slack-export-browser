import Layout from '../../components/layout'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

import {
  getAllChannels,
  getAllChannelPathIds,
  getChannel
} from '../../lib/channels'


import Channel from '../../components/channel'


export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const channel= await getChannel(params.id)
  return {
    props: {
      channel,
    },
  }
}

export async function getStaticPaths() {
  const paths = getAllChannelPathIds()
  return {
    paths,
    fallback: false,
  }
}

export default function ChannelPage({ channel }) {
  return (
    <Layout>
      <Head>
        <title>{channel.title}</title>
      </Head>
      <article>
        <Channel channel={channel} />
      </article>
    </Layout>
  )
}
