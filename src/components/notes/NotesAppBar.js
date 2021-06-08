import moment, { isMoment } from "moment";
import { useDispatch, useSelector } from "react-redux";
import { saveDataChanges, startUpLoading } from '../../actions/notesActions';


const NotesAppBar = () => {

    const dispatch = useDispatch();
    const { active } = useSelector( state => state.notes )

    const today = moment().format('dddd'); // nombre del dia
    const date = moment().format('YYYY-MM-DD'); // formato año/mes/dia

    const handleSaveData = () => {
        dispatch( saveDataChanges( active ) )
    }

    const handlePicture = () => {
        document.getElementById('id-file').click()
    }

    const handleFileChange = ({target}) => {
        const file = target.files[0];
        if ( file ) {
            dispatch( startUpLoading( file ) )
        }
    }

    return (
        <div className="notes__appbar">
            <span>{`${today} ${date}`}</span>

            <input 
            id="id-file"
            type="file" 
            style={{ display:"none" }} 
            onChange={ handleFileChange }
            name="file"
            />


            <div>
                <button className="btn" onClick={ handlePicture }>Picture</button>
                <button className="btn" onClick={ handleSaveData }>Save</button>
            </div>
        </div>
    )
}

export default NotesAppBar
