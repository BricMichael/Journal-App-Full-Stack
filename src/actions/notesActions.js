import { db } from "../Firebase/firebaseConfig"
import {types} from '../types/types';
import { loadNotes } from '../helpers/loadNotes'

export const StartNewNote = () => {
    return async( dispatch, getState ) => { //getState nombre puede ser cualquiera, es un parametro que nos permite obtener el state, es como el useSelector

        const uidUser = getState().auth.uid // accedo a todos los estados del reducer, accedo al reducer auth y luego a su propiedad auth
    
        const NewNote = {
            title: 'Vengo desde React con Redux',
            body: 'Nueva nueva',
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