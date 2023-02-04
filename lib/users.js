import fs from 'fs'
import path from 'path'

const slackDataFolder = path.join(process.cwd(), 'slack-data')


export function getUserList() {
    const fullPath = path.join(slackDataFolder, "users.json");
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    var userData = JSON.parse(fileContents);

    return userData;
}

export function getUsername(id) {
    const userData = getUserList();
    var result = userData.filter(user => {
        return user.id === id
    })

    if (result) {
        return result.name;
    }
}
