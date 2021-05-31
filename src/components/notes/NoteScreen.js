import { useSelector, useDispatch } from "react-redux"
import { useForm } from "../../hooks/useForm"
import NotesAppBar from "./NotesAppBar"


const NoteScreen = () => {

    const { active:note }= useSelector( state => state.notes )
    const [ values, handleInputChange ] = useForm(note)

    const { title, body, url } = values;

    return (
        <div className="notes__main-content">

            <NotesAppBar />

            <div className="notes__content">         
                <input type="text" placeholder="Some awesome title" value={ title }  onChange={ handleInputChange } className="notes__title_input" autoComplete="off"></input>
                <textarea placeholder="What happened today" value={ body } className="notes__textarea" onChange={ handleInputChange } ></textarea>
            </div>

            {   url &&
                <div className="notes__image">
                    <img src="https://ugc.kn3.net/i/760x/http://img8.uploadhouse.com/fileuploads/15294/15294438b5ab0dd6dda2d9c190f9d7de4fa165e9.jpg" alt="event day" />
                </div>
            }
            
        </div>
    )
}

export default NoteScreen
