import { parseJSON } from 'date-fns'
import fs from 'fs'
import path from 'path'

/* This is where we keep our channel JSON fetching logic. */
export function getAllChannelPathIds() {
  var channelData = getAllChannels()

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

  return channelData.map((thisChannel) => {
    return {
      params: {
        name: thisChannel.name,
      },
    }
  })
}

// Gets all channels
export function getAllChannels() {
  const slackDataFolder = path.join(
    process.cwd(),
    process.env.SLACK_DATA_FOLDER,
  )

  const fullPath = path.join(slackDataFolder, 'channels.json')
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  var channelData = JSON.parse(fileContents)

  return channelData.sort(function (a, b) {
    return a.name.localeCompare(b.name)
  })
}

// gets a specific channel object given an ID
export function getChannelByID(id) {
  var channelData = getAllChannels()

  var result = channelData.filter(function (channel) {
    return channel.id === id
  })

  if (result && result.length == 1) {
    return result[0]
  } else {
    return null
  }
}

// Gets a more robust channel object by name that includes the content
// TODO: Typing would help differentiate the return type here from what getChannelByID() returns.
export async function getChannel(name) {
  const channelFolder = path.join(
    process.cwd(),
    process.env.SLACK_DATA_FOLDER,
    name,
  )

  const jsonFiles = fs.readdirSync(channelFolder)

  // build an array of objects for this channel for each day
  const jsonData = jsonFiles.map((jsonFile) => {
    const fullPath = path.join(channelFolder, jsonFile)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const dateString = jsonFile.replace(/\.json$/, '')

    const fileId = name + '-' + dateString

    return {
      id: fileId,
      date: dateString,
      content: JSON.parse(fileContents),
    }
  })

  return {
    id: name,
    title: name,
    days: jsonData,
  }
}
