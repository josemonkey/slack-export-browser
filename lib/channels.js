import { parseJSON } from 'date-fns'
import fs from 'fs'
import path from 'path'

const slackDataFolder = path.join(process.cwd(), 'slack-data')

export function getAllChannelPathIds() {

  var channelData =  getAllChannels()

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

export function getAllChannels() {
  const fullPath = path.join(slackDataFolder, "channels.json");
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  var channelData = JSON.parse(fileContents);
  return channelData;
}

export function getChannelByID(id) 
{
  var channelData =  getAllChannels()

  var result = channelData.filter(function(channel)
  {
    return channel.id === id;
  })

  if(result && result.length == 1)
  {
    return result[0];
  } else {
    return null;
  }
}

export async function getChannel(name) {

  const channelFolder = path.join(process.cwd(), 'slack-data', name)

  const jsonFiles = fs.readdirSync(channelFolder)

  // build an array of objects for this channel for each day
  const jsonData = jsonFiles.map((jsonFile) => {

    const fullPath = path.join(channelFolder, jsonFile);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const dateString = jsonFile.replace(/\.json$/, '');

    const fileId = name + "-" + dateString

    return {
      id: fileId,
      date: dateString,
      content: JSON.parse(fileContents)
    }

  })

  return {
    id: name,
    title: name,
    days: jsonData
  }
}
