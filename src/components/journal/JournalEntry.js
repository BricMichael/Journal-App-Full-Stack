import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notesActions';


const JournalEntry = ({ id, body, date, title, url }) => {

    const noteDate = moment(date);
    const dispatch = useDispatch();
   
    const handleEntryClick = () => {
        dispatch( activeNote(id, { body, date, title }) )
    }

    return (
        <div className="journal__entry container   animate__animated animate__fadeIn" onClick={ handleEntryClick }>

            { url &&
                <div className="journal__entry_picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(${url})`
                }}
                >         
                </div> 
            }
            
            <div className="journal__entry-body">
                <p className="journal__entry_parrafo">{ title }</p>
                <p className="journal__entry_content">{ body }</p>
            </div>

            <div className="journal__entry-date-box">
                <span>{ noteDate.format('dddd') }</span> {/*(dia) fecha que fue creada */}
                
                <h4>{ noteDate.format('Do') }</h4>{/*(dia en numero delm mes) fecha que fue creada */}
            </div>
          
        </div>
    )
}

export default JournalEntry;
