const initialState = {
    isStatus: false,

}

const modalReducer = (state = initialState, { type, payload }) => {
    switch (type)
    {

        case "OPEN_MODAL":
            state.isStatus = true
            return { ...state }
        case "CANCEL_MODAL":
            state.isStatus = false
            return { ...state }
        default:
            return state
    }
}

export default modalReducer;