import constants from '../constants/constants'

const initialState = {
    isCreateBoardOpened: false
}


const createBoardReducre = (state = initialState, action) => {
    switch (action.type) {
        case constants.CREATE_NEW_BOARD: {
            return Object.assign({}, state, { isCreateBoardOpened: action.payload })
        }
        default: return state;
    }
}

export default createBoardReducre;