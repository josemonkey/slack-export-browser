import utilStyles from '../styles/utils.module.css'
import styles from './richTextElement.module.css'
import Link from 'next/link'
import User from './user';


export function getChannelByID(id, channelData) {

    var result = channelData.filter(function (channel) {
        return channel.id === id;
    })

    if (result && result.length == 1) {
        return result[0];
    } else {
        return null;
    }
}

export default function RichTextElement({ element, allChannels, allUsers }) {

    // process this element first


    if (element.type === "rich_text_section") {
        return (
            <div>

                {element.elements?.map((nestedElement) => (
                    <RichTextElement element={nestedElement} allChannels={allChannels} allUsers={allUsers}/>
                ))}

            </div>
        )
    } else if (element.type === "text") {
        return (
            <span>

                {element.text}

            </span>
        )
    } else if (element.type === "emoji") {

        if (element.unicode && !isNaN(element.unicode)) {
            return (
                <span>
                    {String.fromCodePoint(parseInt(element.unicode, 16))}



                </span>
            )
        } else {
            return (<></>);
        }
    } else if (element.type === "link") {

        var linkText = element.text ? element.text : element.url;
        return (
            <a href={element.url}>

                {linkText}

            </a>
        )
    } else if (element.type === "rich_text_list") {
        return (
            <ul>

                {element.elements?.map((nestedElement) => (
                    <li><RichTextElement element={nestedElement} allChannels={allChannels} allUsers={allUsers}/></li>
                ))}

            </ul>
        )
    } else if (element.type === "rich_text_quote") {
        return (
            <div className={styles.quote}>

                {element.elements?.map((nestedElement) => (
                    <RichTextElement element={nestedElement} allChannels={allChannels} allUsers={allUsers}/>
                ))}

            </div>
        )

    } else if (element.type === "channel") {

        var otherChannel = getChannelByID(element.channel_id, allChannels);

        if (otherChannel && otherChannel.name)

            return (
                <Link href={`/channels/${otherChannel.name}`}>#{otherChannel.name}</Link>
            );

        else {
            return (
                <span className={utilStyles.error}>[Invalid channel reference, id={element.channel_id} ]</span>

            );
        }

    } else if (element.type === "user") {

        console.log(element);

        return (
            <User userData={allUsers} userId={element.user_id} />);



    } else {

        return (<div className={utilStyles.error}>Unknown RT Element: {element.type}</div>);
    }



}