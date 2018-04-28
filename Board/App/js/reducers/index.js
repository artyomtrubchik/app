import constants from '../constants/constants';

const initialState = {
    articles: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.ADD_ARTICLE:
            return Object.assign({}, state, { articles: state.articles.concat(action.payload) });
        default:           
            return state;
    }
}

export default rootReducer;