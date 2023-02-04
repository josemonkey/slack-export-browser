import utilStyles from '../styles/utils.module.css'
import Date from './date'
import MessageBlock from './messageBlock';



export default function ChannelDay({ id, date, content }) {

    console.log(content);
    return (
        <div>

            <h2><Date dateString={date} /></h2>


            {content?.map((thisOne) => (



                <div>
                    {thisOne.type}<br />
                    <div dangerouslySetInnerHTML={{ __html: thisOne.text }} />
                    {thisOne.user}<br />

                    {thisOne.blocks?.map((block) => (

                            <MessageBlock block={block} />
                    ))}


                </div>
            ))}


        </div>);
}