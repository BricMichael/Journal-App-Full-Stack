import { types } from "../types/types"


export const Login = ( uid, displayName ) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})

