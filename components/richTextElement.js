import utilStyles from '../styles/utils.module.css'

export default function RichTextElement({ element }) {

    // process this element first


    if (element.type === "rich_text_section") {
        return (
            <div>

                {element.elements?.map((nestedElement) => (
                    <RichTextElement element={nestedElement} />
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
        return (
            <span>
                {String.fromCodePoint(parseInt(element.unicode, 16))}



            </span>
        )
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
                    <li><RichTextElement element={nestedElement} /></li>
                ))}

            </ul>
        )
    } else {

        return (<div className={utilStyles.error}>Unknown RT Element: {element.type}</div>);
    }



}