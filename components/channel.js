import utilStyles from '../styles/utils.module.css'
import Date from '../components/date'
import ChannelDay from './channelDay'



export default function Channel({ channel }) {

    return (

        <div>
            <h1 className={utilStyles.headingXl}>{channel.title}</h1>


            {channel.days.map(({ id, date, content }) => (


                <ChannelDay id={id} date={date} content={content} />

            ))
            }
        </div>
    );
}