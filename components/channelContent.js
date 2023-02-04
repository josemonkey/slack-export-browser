import utilStyles from '../styles/utils.module.css'
import Date from './date'
import ChannelContentItem from './channelContentItem';




export default function ChannelContent({ id, date, content }) {


    return (
        <div>

            <h2><Date dateString={date} /></h2>


            {content?.map((thisOne) => (

                <ChannelContentItem contentItem={thisOne} />


            ))}


        </div>);
}