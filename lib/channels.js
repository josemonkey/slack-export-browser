import { parseJSON } from 'date-fns'
import fs from 'fs'
import path from 'path'

const slackDataFolder = path.join(process.cwd(), 'slack-data')

export function getAllChannelPathIds() {

  var channelData =  getChannelList()

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

export function getChannelList() {
  const fullPath = path.join(slackDataFolder, "channels.json");
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  var channelData = JSON.parse(fileContents);
  return channelData;
}

export async function getChannel(name) {

  const channelFolder = path.join(process.cwd(), 'slack-data', name)

  const jsonFiles = fs.readdirSync(channelFolder)

  //console.log(jsonFiles);

  // build an array of objects for this channel for each day
  const jsonData = jsonFiles.map((jsonFile) => {

    const fullPath = path.join(channelFolder, jsonFile);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const dateString = jsonFile.replace(/\.json$/, '');

    const fileId = name + "-" + dateString

    //console.log(fileContents);  
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
