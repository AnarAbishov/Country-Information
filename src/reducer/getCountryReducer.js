

export default function Reducer(state=[],action) {
    let reducer = null;
    switch (action.type) {
        case "GetCountryConst":
            reducer = action;
            return(reducer)
        default:
            return state;
    }
}