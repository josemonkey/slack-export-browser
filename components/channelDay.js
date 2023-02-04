import utilStyles from '../styles/utils.module.css'
import Date from './date'



export default function ChannelDay({ id, date, content }) {

    return (
        <div>

            <h2><Date dateString={date} /></h2>

            {content.map(({ type, text, user, blocks }) => (
                <div>
                    {type}<br />
                    <div dangerouslySetInnerHTML={{ __html: text }} />
                    {user}<br />

                </div>
            ))}


        </div>);
}