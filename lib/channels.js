import { parseJSON } from 'date-fns'
import fs from 'fs'
import path from 'path'

const slackDataFolder = path.join(process.cwd(), 'slack-data')

export function getAllChannelPathIds() {
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

export function getChannelList() {
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

export async function getChannel(id) {

  const title = id;


  const channelFolder = path.join(process.cwd(), 'slack-data', id)

  const jsonFiles = fs.readdirSync(channelFolder)

  //console.log(jsonFiles);

  // build an array of objects for this channel for each day
  const jsonData = jsonFiles.map((jsonFile) => {

    const fullPath = path.join(channelFolder, jsonFile);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const dateString = jsonFile.replace(/\.json$/, '');

    const fileId = id + "-" + dateString

    //console.log(fileContents);  
    return {
      id: fileId,
      date: dateString,
      content: JSON.parse(fileContents)
    }

  })

  return {
    id: id,
    title: title,
    days: jsonData
  }
}
