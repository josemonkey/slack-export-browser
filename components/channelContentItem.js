import utilStyles from '../styles/utils.module.css'
import Message from './message';


function getUserName(userId) {
    if (userId === "U0M5Y3TDK") { return "Jeremy"; }
    if (userId === "U0M6QNFRB") { return "Jess"; }
    return "(UNKNOWN USER)";
}


export default function ChannelContentItem({contentItem}) {



    if (contentItem.type === "message") {
        if (contentItem.subtype && contentItem.subtype === "channel_join") {
            return (<>foo</>)
            // FIXME
        } else if (contentItem.subtype && contentItem.subtype === "channel_purpose") {
            return (<>foo2</>)
            // FIXME
        
        } else {
            console.log("XXX" + contentItem.type)

            return (
                
                <Message contentItem={contentItem} />

            )
        }
    } else {
        return (
            <div>Unknown ContentItem type: {contentItem.type}</div>
        )
    }

}