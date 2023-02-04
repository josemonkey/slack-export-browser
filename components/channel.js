import utilStyles from '../styles/utils.module.css'
import Date from '../components/date'
import ChannelContent from './channelContent'



export default function Channel({ channel }) {

    return (

        <div>
            <h1 className={utilStyles.headingXl}>#{channel.title}</h1>


            {channel.days.map(({ id, date, content }) => (


                <ChannelContent id={id} date={date} content={content} />

            ))
            }
        </div>
    );
}