import utilStyles from '../styles/utils.module.css'
import Date from './date'
import ChannelContentItem from './channelContentItem';


function getUserName(userId) {
    if (userId === "U0M5Y3TDK") { return "Jeremy"; }
    if (userId === "U0M6QNFRB") { return "Jess"; }
    return "(UNKNOWN USER)";
}


export default function ChannelContent({ id, date, content }) {


    return (
        <div>

            <h2><Date dateString={date} /></h2>


            {content?.map((thisOne) => (

                <ChannelContentItem contentItem={thisOne} />


            ))}


        </div>);
}