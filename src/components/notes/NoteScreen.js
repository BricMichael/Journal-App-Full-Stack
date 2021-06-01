import { useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { activeNote } from "../../actions/notesActions"
import { useForm } from "../../hooks/useForm"
import NotesAppBar from "./NotesAppBar"


const NoteScreen = () => {

    const dispatch = useDispatch();

    const { active:note }= useSelector( state => state.notes )
    const [ values, handleInputChange, reset ] = useForm(note)
    const { title, body, url } = values;

    const activeId = useRef(note.id)  // este hook permiete guardar en una varibale un valor mutable(que puede cambiar) que no se va a redibujar

    useEffect( () => {

        if( note.id !== activeId.current ){
            reset(note)
            activeId.current = note.id
        }

    }, [note, reset])

    useEffect( () => {
        dispatch( activeNote( note.id, {...values} ) )

    },[values, dispatch])


    return (
        <div className="notes__main-content">

            <NotesAppBar />

            <div className="notes__content">         
                <input type="text" placeholder="Some awesome title" value={ title } name="title" onChange={ handleInputChange } className="notes__title_input" autoComplete="off"></input>
                <textarea placeholder="What happened today" value={ body } name="body" className="notes__textarea" onChange={ handleInputChange } ></textarea>
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
