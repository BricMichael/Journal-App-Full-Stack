import { useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { activeNote, startDeleting } from "../../actions/notesActions"
import { useForm } from "../../hooks/useForm"
import NotesAppBar from "./NotesAppBar"


const NoteScreen = () => {

    const dispatch = useDispatch();

    const { active:note }= useSelector( state => state.notes )
    const [ values, handleInputChange, reset ] = useForm(note)
    const { title, body } = values;

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

    const handleDelete = () => {
        dispatch( startDeleting( note.id ) )
    }


    return (
        <div className="notes__main-content">

            <NotesAppBar />

            <div className="notes__content">         
                <input type="text" placeholder="Some awesome title" value={ title } name="title" onChange={ handleInputChange } className="notes__title_input" autoComplete="off"></input>
                <textarea placeholder="What happened today" value={ body } name="body" className="notes__textarea" onChange={ handleInputChange } ></textarea>
            

            {   note.url &&
                <div className="notes__image">
                    <img src={note.url} alt="event day" />
                </div>
            }
            </div>

            <button 
                onClick={ handleDelete }
                className="btn btn-danger"
            >Delete
            </button>
 

        </div>
    )
}

export default NoteScreen
