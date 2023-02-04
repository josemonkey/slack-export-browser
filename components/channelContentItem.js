import utilStyles from '../styles/utils.module.css'
import Message from './message';


function getUserName(userId) {
    if (userId === "U0M5Y3TDK") { return "Jeremy"; }
    if (userId === "U0M6QNFRB") { return "Jess"; }
    return "(UNKNOWN USER)";
}


export default function ChannelContentItem({contentItem}) {

    var username = getUserName(contentItem.user);


    if (contentItem.type === "message") {
        if (contentItem.subtype && contentItem.subtype === "channel_join") {
            return (<div>{username} joined the channel</div>)
            // FIXME
        } else if (contentItem.subtype && contentItem.subtype === "channel_purpose") {
            return (<div>{username} set the channel purpose: {contentItem.purpose}</div>)
            // FIXME
        
        } else {

            return (
                
                <Message username={username} contentItem={contentItem} />

            )
        }
    } else {
        return (
            <div className={utilStyles.error}>Unknown ContentItem type: {contentItem.type}</div>
        )
    }

}