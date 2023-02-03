import fs from 'fs'
import path from 'path'

const slackDataFolder = path.join(process.cwd(), 'slack-data')

export function getAllChannelIds() {
  const fileNames = fs.readdirSync(slackDataFolder)

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'general'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'misc'
  //     }
  //   }
  // ]

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName,
      },
    }
  })
}

export function getAllChannels() {
  const fileNames = fs.readdirSync(slackDataFolder)
  return fileNames.map((fileName) => {
    const id = fileName
    const title = fileName
    return {
      id,
      title,
    }
  })
}

export async function getChannelData(id) {
  return {
    id: id,
    date: '2023-01-01',
  }
}
