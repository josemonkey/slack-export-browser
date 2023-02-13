import fs from 'fs'
import path from 'path'

/* All user JSON access is here */
export function getUserList() {
  const slackDataFolder = path.join(
    process.cwd(),
    process.env.SLACK_DATA_FOLDER,
  )

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
