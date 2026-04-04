const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "UP":
            return state + action.number
        case "Dow":
            return state - 1
        case "Reset":
            return 0

        default:
            return state
    }
}
export default counterReducer
