import fs from 'fs'
import path from 'path'

const slackDataFolder = path.join(process.cwd(), 'slack-data')

export function getUserList() {
  const fullPath = path.join(slackDataFolder, 'users.json')
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  var userData = JSON.parse(fileContents)

  return userData
}

export function getUser(userData, userId) {
  var result = userData.filter((user) => {
    return user.id === userId
  })

  if (result && result.length > 0) {
    return result[0]
  } else {
    return { name: '[UNKNOWN USER]' }
  }
}
