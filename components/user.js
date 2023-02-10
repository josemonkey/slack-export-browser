import { getUsers } from "../lib/users";

function getUserName(userData, userId) {
  var result = userData.filter((user) => {
    return user.id === userId
  })

  if (result && result.length > 0) {
    return result[0].name
  } else {
    return '[UNKNOWN USER]'
  }
}

function getUser(userData, userId) {
  var result = userData.filter((user) => {
    return user.id === userId
  })

  if (result && result.length > 0) {
    return result[0]
  } else {
    return { name: "[UNKNOWN USER]" };
  }
}


export async function getStaticProps() {
    const userData= await getUsers();
    return {
      props: {
        userData,
      },
    }
  }

export default function User({ userData, userId }) {


  const thisUser = getUser(userData, userId);

    return (

    <span><b>{thisUser.name}</b></span>
    )
  }
  
