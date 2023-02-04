import { getUsers } from "../lib/users";

function getUserName(userId) {
    if (userId === "U0M5Y3TDK") { return "Jeremy"; }
    if (userId === "U0M6QNFRB") { return "Jess"; }
    return "(UNKNOWN USER)";
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

    console.log(userData);
    return (

    <div>{getUserName(userId)}</div>
    )
  }
  
