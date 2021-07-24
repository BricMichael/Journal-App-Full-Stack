import { types } from "../types/types"

describe('Validar que el objecto types coincida todas sus keys', () => {

    test('Objectos iguales', () => {
        expect( types ).toEqual( {
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        
            uiSetError: '[UI] setError',
            uiRemoveError: '[UI] removeError',
        
            uiStartLoading: '[UI] StartLoading',
            uiFinishLoading: '[UI] FinishLoading',
        
            notesAddNew: '[Notes] NewNote',
            notesActive: '[Notes] SetActiveNote',
            notesLoad: '[Notes] LoadNotes',
            notesUpdate: '[Notes] UpdateNote',
            notesFileUrl: '[Notes] UpdateImageUrl',
            notesDelete: '[Notes] DeleteNote',
            notesLogoutCleaning: '[Notes] LogoutCleaning',
        })
    })


})