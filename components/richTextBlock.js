import RichTextElement from "./richTextElement";

export default function RichTextBlock({ username, block }) {


    return (

        <div>
            <div style={{float: "left", marginRight: "5px"}}><b>{username}:</b> </div>

            <div>
            {block.elements?.map((element) => (


                <RichTextElement element={element} />

            ))}
            </div>

        </div>

    );

}