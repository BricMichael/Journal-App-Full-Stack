import { db } from "../Firebase/firebaseConfig"
import {types} from '../types/types';
import { loadNotes } from '../helpers/loadNotes'
import Swal from "sweetalert2";
import { fileUpload } from "../helpers/fileUpload";

export const StartNewNote = () => {
    return async( dispatch, getState ) => { //getState nombre puede ser cualquiera, es un parametro que nos permite obtener el state, es como el useSelector

        const uidUser = getState().auth.uid // accedo a todos los estados del reducer, accedo al reducer auth y luego a su propiedad auth
    
        const NewNote = {
            title: '',
            body: '',
            date: new Date().getTime() // esto me va a dar el momento exacto de hoy en el que la persona crea la nota
        }

        const docRef = await db.collection(`${uidUser}/journal/notes`).add( NewNote );

        dispatch((activeNote( docRef.id, NewNote )))
    }
}

export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    } 
})

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch( setNotes( notes ))

    }
}

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes
})

export const saveDataChanges = (note) => async( dispatch, getState ) => {

    const uidUser = getState().auth.uid // accedo a todos los estados del reducer, accedo al reducer auth y luego a su propiedad auth

    if ( !note.url ) delete note.url;

    const noteToFirestore = {...note}
    delete noteToFirestore.id;

    await db.doc(`${ uidUser }/journal/notes/${ note.id }`).update( noteToFirestore )

    dispatch(refreshNote( note.id, noteToFirestore));
    Swal.fire('Saved', note.title, 'success')
}

export const refreshNote = ( id, note ) => ({
    type: types.notesUpdate,
    payload: {
        id,
        note: {
            id,
            ...note
        }
    }
})

export const startUpLoading = ( file ) => async (dispatch, getState) => {

    const { active: activeNote } = getState().notes;

    Swal.fire({ 

        title:'Uploading file...',
        onBeforeOpen: () => {
            Swal.showLoading();
        },
        showCloseButton: false,
        showConfirmButton: false,
        allowOutsideClick: false,
        allowEscapeKey: false,
        

    })

    const fileUrl = await fileUpload(file)
    activeNote.url = fileUrl

    dispatch(saveDataChanges(activeNote))

    Swal.close();  // CERRAR EL SPINER
    
}

export const startDeleting = (id) => async(dispatch, getState) => {
        try {
            const { uid: uidUser } = getState().auth;
            await db.doc(`${ uidUser }/journal/notes/${ id }`).delete();
            dispatch( deleteNote(id) );
            Swal.fire('Deleted note', 'your note has been deleted successfully', 'success') 

        } catch (error) {
            console.log(error)
        }
}


export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id
})

export const noteLogout = () => ({ type: types.notesLogoutCleaning });