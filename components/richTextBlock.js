import RichTextElement from "./richTextElement";
import styles from './richTextBlock.module.css';
import User from "./user";

export default function RichTextBlock({ block, allChannels, userId, allUsers}) {


    return (

        <div className={styles.flexContainer}>
            <div className={styles.flexChild}><User userData={allUsers} userId={userId}/><b>: </b></div>

            <div className={styles.flexChild}>
            {block.elements?.map((element) => (


                <RichTextElement element={element} allChannels={allChannels}/>

            ))}
            </div>

        </div>

    );

}