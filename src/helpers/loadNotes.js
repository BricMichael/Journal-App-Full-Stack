import { db } from "../Firebase/firebaseConfig"


export const loadNotes = async( uid ) => {
    const notesSnapshot = await db.collection(`${uid}/journal/notes`).get();
    const notes = [];
    
    notesSnapshot.forEach( snapHijo => {
        notes.push({
            id: snapHijo.id,
            ...snapHijo.data() //mandar al array todas las notas que se tengan
        })
    });
    return notes;
}