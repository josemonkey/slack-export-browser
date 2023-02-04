import MessageBlock from "./messageBlock";

function getUserName(userId) {
    if (userId === "U0M5Y3TDK") { return "Jeremy"; }
    if (userId === "U0M6QNFRB") { return "Jess"; }
    return "(UNKNOWN USER)";
}

export default function Message({contentItem}) {

    console.log("YYY" +     contentItem.type)

    console.log(contentItem)


    return (
        <div>
        {
            contentItem.blocks?.map((block) => (

                <MessageBlock username={getUserName(contentItem.user)} block={block} />
            ))
        }
        </div>
    );

}