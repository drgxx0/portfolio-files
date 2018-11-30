import * as actionTypes from './actionsType';

const initState = {
    sideBar: false,
    activeItem: ''
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes.SIDEBAR:
            return {
                ...state,
                sideBar: action.stat,
            }
        case actionTypes.ACTIVE_ITEM:
            return {
                ...state,
                activeItem: action.item
            }
        default:
            return state
    }
}

export default reducer