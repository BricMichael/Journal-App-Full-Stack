import { useDispatch, useSelector } from "react-redux";
import { saveDataChanges } from '../../actions/notesActions';


const NotesAppBar = () => {

    const dispatch = useDispatch();
    const { active } = useSelector( state => state.notes )

    const handleSaveData = () => {
        dispatch( saveDataChanges( active ) )
    }

    return (
        <div className="notes__appbar">
            <span>05 August 2021</span>

            <div>
                <button className="btn">Picture</button>
                <button className="btn" onClick={ handleSaveData }>Save</button>
            </div>
        </div>
    )
}

export default NotesAppBar
