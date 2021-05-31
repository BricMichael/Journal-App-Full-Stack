

import { types } from "../types/types";
// estructura de este reducer
// {
//     notes: [],
//     active: null, notas en null aparce la screen morada de agg new nota
//     active: {  si se tienen notas se pintan en el sidebar
//         id: 'asfsdfdssdgffd',  viene de firebase
//         title: '',
//         body: '',
//         imageUrl: '';
//         date: 2153153
//     }
// }

const initialState = {
    notes: [],
    active: null, 
}

export const notesReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case types.notesActive:
            return {
                ...state, //regresar un new state y no mutar el anterior
                active: {
                    ...action.payload  // se le pasa TODO el objecto que viene en payload
                }
            }
        case types.notesLoad:
            return {
                ...state,
                notes: [ ...action.payload ]
            }
        
    
        default:
            return state;
    }
}


