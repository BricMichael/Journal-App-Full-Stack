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

        
    
        default:
            return state;
    }
}


