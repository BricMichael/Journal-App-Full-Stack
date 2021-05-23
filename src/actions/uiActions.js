import { types } from "../types/types";


export const setError = ( err ) => ({
    type: types.uiSetError,
    payload: {
        msgError: err
    }
});

export const removeError = () => ({
    type: types.uiRemoveError,
});

export const StartLoading = () => ({
    type: types.uiStartLoading,
    payload: {
        loading: true
    }
})

export const FinishLoading = () => ({
    type: types.uiFinishLoading
})