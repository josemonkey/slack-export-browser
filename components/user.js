import { getUsers, getUser } from '../lib/users'

// a component for rendering a User
// TODO: Add profile pics / avatars?
export default function User({ userData, userId }) {
  const thisUser = getUser(userData, userId)

  return (
    <span>
      <b>{thisUser.name}</b>
    </span>
  )
}
