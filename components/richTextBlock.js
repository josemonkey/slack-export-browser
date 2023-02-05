import RichTextElement from "./richTextElement";
import styles from './richTextBlock.module.css';

export default function RichTextBlock({ username, block, allChannels}) {


    return (

        <div className={styles.flexContainer}>
            <div className={styles.flexChild}><b>{username}:</b> </div>

            <div className={styles.flexChild}>
            {block.elements?.map((element) => (


                <RichTextElement element={element} allChannels={allChannels}/>

            ))}
            </div>

        </div>

    );

}