const cartReducer = (state = [], action) => {
    const newState = [...state]
    switch (action.type) {
        case "ADD_TO_CART":
            return [
                ...state,
                {
                    id: action.id,
                    quantity: 1,
                    info: action.info
                }
            ]
        case "UPDATE_QUANTITY":
            const itemUpdate = newState.find(item => item.id === action.id);
            if (!itemUpdate) {
                return state
            }
            itemUpdate.quantity += action.quantity;
            if (itemUpdate.quantity <= 0) {
                return newState.filter(item => item.id !== action.id)
            }
            return newState
        case "DELETE_CART":
            return state.filter(item => item.id !== action.id)
        case "CLEAR_CART":
            return []

        default:
            break;
    }
    return state
}
export default cartReducer
