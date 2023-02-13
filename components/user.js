import { getUsers, getUser } from '../lib/users'

export default function User({ userData, userId }) {
  const thisUser = getUser(userData, userId)

  return (
    <span>
      <b>{thisUser.name}</b>
    </span>
  )
}
