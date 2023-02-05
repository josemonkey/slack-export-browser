import Layout from '../../components/layout'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

import {
  getAllChannels,
  getChannel,
  getAllChannelPathIds
} from '../../lib/channels'


import Channel from '../../components/channel'


export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const channel= await getChannel(params.name)
  const allChannels = await getAllChannels()
  return {
    props: {
      channel,
      allChannels
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

export default function ChannelPage({ channel, allChannels}) {

  return (
    <Layout>
      <Head>
        <title>{channel.title}</title>
      </Head>
      <article>
        <Channel channel={channel} allChannels={allChannels} />
      </article>
    </Layout>
  )
}
